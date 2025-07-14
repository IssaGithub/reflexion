export interface ReflectionQuestion {
  id: string;
  text: string;
  category: 'glaube' | 'familie' | 'business' | 'meta';
  order: number;
  isActive: boolean;
}

export interface ReflectionCategory {
  id: 'glaube' | 'familie' | 'business' | 'meta';
  name: string;
  emoji: string;
  description: string;
  color: string;
}

export interface ReflectionResponse {
  questionId: string;
  answer: string;
  mood?: 'positive' | 'neutral' | 'negative';
  tags?: string[];
}

export interface DailyReflection {
  id: string;
  date: string; // ISO date string
  responses: ReflectionResponse[];
  completedAt?: string; // ISO datetime string
  notes?: string;
}

export interface ReflectionHistory {
  reflections: DailyReflection[];
  totalDays: number;
  streak: number;
  lastReflectionDate?: string;
}

export interface AIAnalysisPrompt {
  period: 'week' | 'month' | 'quarter';
  focusAreas: string[];
  customPrompt?: string;
}

export interface AIAnalysisResult {
  id: string;
  period: string;
  createdAt: string;
  summary: string;
  insights: string[];
  recommendations: string[];
  patterns: {
    positive: string[];
    concerning: string[];
  };
} 