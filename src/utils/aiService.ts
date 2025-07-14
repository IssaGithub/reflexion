import type { 
  AIAnalysisPrompt, 
  AIAnalysisResult, 
  DailyReflection,
  ReflectionQuestion
} from '../types/reflection.js';

interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  usage?: {
    total_tokens: number;
    prompt_tokens: number;
    completion_tokens: number;
  };
}

export class AIService {
  private static readonly STORAGE_KEY = 'reflexion-ai-settings';
  private static readonly API_BASE_URL = 'https://api.openai.com/v1';

  // Get stored API settings
  static getSettings(): { apiKey?: string; model?: string; maxTokens?: number } {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  // Save API settings
  static saveSettings(settings: { apiKey?: string; model?: string; maxTokens?: number }): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
  }

  // Check if API is configured
  static isConfigured(): boolean {
    const settings = this.getSettings();
    return !!settings.apiKey?.trim();
  }

  // Validate API key format
  static validateApiKey(apiKey: string): boolean {
    return apiKey.startsWith('sk-') && apiKey.length > 20;
  }

  // Test API connection
  static async testConnection(apiKey: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/models`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Generate analysis prompt
  static generateAnalysisPrompt(
    reflections: DailyReflection[], 
    questions: ReflectionQuestion[],
    prompt: AIAnalysisPrompt
  ): string {
    const period = this.getPeriodText(prompt.period);
    const focusAreasText = prompt.focusAreas.length > 0 
      ? `Schwerpunkt auf: ${prompt.focusAreas.map(area => this.getCategoryName(area)).join(', ')}`
      : 'Alle Lebensbereiche';

    // Prepare reflection data
    const reflectionData = reflections.map(r => {
      const responses = r.responses.map(resp => {
        const question = questions.find(q => q.id === resp.questionId);
        return {
          kategorie: question?.category || 'unbekannt',
          frage: question?.text || 'Unbekannte Frage',
          antwort: resp.answer
        };
      });

      return {
        datum: r.date,
        antworten: responses,
        notizen: r.notes
      };
    }).filter(r => r.antworten.length > 0);

    const systemPrompt = `Du bist ein einfühlsamer Lebenscoach und spiritueller Berater, der christliche Männer bei ihrer persönlichen Entwicklung als Vater, Ehemann und Unternehmer unterstützt. 

Deine Aufgabe ist es, tägliche Reflexionen zu analysieren und wertvolle Erkenntnisse zu liefern.

WICHTIGE PRINZIPIEN:
- Respektiere den christlichen Glauben als Grundlage
- Sei ermutigend und konstruktiv, niemals verurteilend
- Erkenne sowohl Stärken als auch Wachstumsbereiche
- Gib konkrete, umsetzbare Empfehlungen
- Berücksichtige die Balance zwischen Familie, Glauben und Business

Analysiere die Reflexionen und liefere:
1. Eine kurze Zusammenfassung der Periode
2. Erkannte Muster und Trends
3. Positive Entwicklungen und Stärken
4. Bereiche für Wachstum und Verbesserung
5. Konkrete, praktische Empfehlungen

Antworte auf Deutsch und strukturiert.`;

    const userPrompt = `
ANALYSEZEITRAUM: ${period}
FOKUS: ${focusAreasText}
${prompt.customPrompt ? `SPEZIELLE FRAGESTELLUNG: ${prompt.customPrompt}` : ''}

REFLEXIONSDATEN:
${JSON.stringify(reflectionData, null, 2)}

Bitte analysiere diese Reflexionen und gib mir strukturierte Insights zu meiner Entwicklung als Christ, Vater und Unternehmer.`;

    return JSON.stringify([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ]);
  }

  // Perform AI analysis
  static async analyzeReflections(
    reflections: DailyReflection[],
    questions: ReflectionQuestion[],
    prompt: AIAnalysisPrompt
  ): Promise<AIAnalysisResult> {
    const settings = this.getSettings();
    
    if (!settings.apiKey) {
      throw new Error('API-Key nicht konfiguriert');
    }

    const messages: OpenAIMessage[] = JSON.parse(
      this.generateAnalysisPrompt(reflections, questions, prompt)
    );

    try {
      const response = await fetch(`${this.API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${settings.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: settings.model || 'gpt-4o-mini',
          messages,
          max_tokens: settings.maxTokens || 2000,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API-Fehler: ${response.status} - ${errorData.error?.message || 'Unbekannter Fehler'}`);
      }

      const data: OpenAIResponse = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) {
        throw new Error('Keine Antwort von der KI erhalten');
      }

      // Parse the structured response
      const analysisResult = this.parseAIResponse(content, prompt);
      
      return analysisResult;

    } catch (error) {
      console.error('AI Analysis Error:', error);
      throw error instanceof Error ? error : new Error('Fehler bei der KI-Analyse');
    }
  }

  // Parse AI response into structured format
  private static parseAIResponse(content: string, prompt: AIAnalysisPrompt): AIAnalysisResult {
    // Try to extract structured information from the response
    const lines = content.split('\n').filter(line => line.trim());
    
    let summary = '';
    let insights: string[] = [];
    let recommendations: string[] = [];
    let positivePatterns: string[] = [];
    let concerningPatterns: string[] = [];

    let currentSection = '';
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Detect sections
      if (trimmed.toLowerCase().includes('zusammenfassung') || trimmed.toLowerCase().includes('überblick')) {
        currentSection = 'summary';
        continue;
      } else if (trimmed.toLowerCase().includes('erkenntnisse') || trimmed.toLowerCase().includes('muster')) {
        currentSection = 'insights';
        continue;
      } else if (trimmed.toLowerCase().includes('empfehlungen') || trimmed.toLowerCase().includes('handlungsempfehlungen')) {
        currentSection = 'recommendations';
        continue;
      } else if (trimmed.toLowerCase().includes('positiv') || trimmed.toLowerCase().includes('stärken')) {
        currentSection = 'positive';
        continue;
      } else if (trimmed.toLowerCase().includes('verbesserung') || trimmed.toLowerCase().includes('wachstum')) {
        currentSection = 'concerning';
        continue;
      }
      
      // Skip headers and bullets
      if (trimmed.startsWith('#') || trimmed.startsWith('**') || trimmed.length < 10) {
        continue;
      }
      
      // Add content to appropriate section
      const cleanLine = trimmed.replace(/^[-*•]\s*/, '').replace(/^\d+\.\s*/, '');
      
      switch (currentSection) {
        case 'summary':
          summary += (summary ? ' ' : '') + cleanLine;
          break;
        case 'insights':
          if (cleanLine) insights.push(cleanLine);
          break;
        case 'recommendations':
          if (cleanLine) recommendations.push(cleanLine);
          break;
        case 'positive':
          if (cleanLine) positivePatterns.push(cleanLine);
          break;
        case 'concerning':
          if (cleanLine) concerningPatterns.push(cleanLine);
          break;
        default:
          // If no section detected, add to insights
          if (cleanLine && insights.length < 5) {
            insights.push(cleanLine);
          }
      }
    }

    // Fallback: if parsing failed, use the whole content as summary
    if (!summary && !insights.length && !recommendations.length) {
      summary = content.substring(0, 500) + (content.length > 500 ? '...' : '');
      insights = ['Detaillierte Analyse verfügbar im vollständigen Text.'];
      recommendations = ['Bitte überprüfen Sie die vollständige Analyse für spezifische Empfehlungen.'];
    }

    return {
      id: crypto.randomUUID(),
      period: this.getPeriodText(prompt.period),
      createdAt: new Date().toISOString(),
      summary: summary || 'Analyse abgeschlossen - siehe Details unten.',
      insights: insights.slice(0, 10), // Limit to 10 insights
      recommendations: recommendations.slice(0, 8), // Limit to 8 recommendations
      patterns: {
        positive: positivePatterns.slice(0, 5),
        concerning: concerningPatterns.slice(0, 5)
      }
    };
  }

  // Helper functions
  private static getPeriodText(period: string): string {
    switch (period) {
      case 'week': return 'Letzte Woche';
      case 'month': return 'Letzter Monat';
      case 'quarter': return 'Letztes Quartal';
      default: return period;
    }
  }

  private static getCategoryName(category: string): string {
    switch (category) {
      case 'glaube': return 'Glaube & Spiritualität';
      case 'familie': return 'Familie & Beziehungen';
      case 'business': return 'Business & Führung';
      case 'meta': return 'Persönliches Wachstum';
      default: return category;
    }
  }

  // Get cost estimation
  static estimateCost(reflections: DailyReflection[], questions: ReflectionQuestion[]): {
    estimatedTokens: number;
    estimatedCostUSD: number;
  } {
    // Rough estimation: ~4 characters per token, plus system prompt overhead
    const reflectionText = reflections.map(r => 
      r.responses.map(resp => resp.answer).join(' ') + (r.notes || '')
    ).join(' ');
    
    const questionText = questions.map(q => q.text).join(' ');
    const systemPromptTokens = 500; // Estimated system prompt size
    
    const estimatedTokens = Math.ceil((reflectionText.length + questionText.length) / 4) + systemPromptTokens;
    
    // GPT-4o-mini pricing: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
    // Estimate 2:1 input to output ratio
    const inputTokens = estimatedTokens;
    const outputTokens = Math.ceil(estimatedTokens * 0.5);
    
    const estimatedCostUSD = (inputTokens * 0.00000015) + (outputTokens * 0.0000006);
    
    return {
      estimatedTokens: estimatedTokens + outputTokens,
      estimatedCostUSD: Math.max(estimatedCostUSD, 0.001) // Minimum 0.1 cent
    };
  }
} 