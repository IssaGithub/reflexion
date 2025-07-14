import type { 
  DailyReflection, 
  ReflectionHistory, 
  ReflectionQuestion,
  ReflectionResponse 
} from '../types/reflection.js';
import { defaultQuestions } from '../data/defaultQuestions.js';

const STORAGE_KEYS = {
  REFLECTIONS: 'reflexion-daily-reflections',
  QUESTIONS: 'reflexion-custom-questions',
  SETTINGS: 'reflexion-settings'
};

export class ReflectionStorage {
  static getTodaysReflection(): DailyReflection | null {
    const today = new Date().toISOString().split('T')[0];
    const history = this.getReflectionHistory();
    return history.reflections.find(r => r.date === today) || null;
  }

  static saveTodaysReflection(responses: ReflectionResponse[], notes?: string): void {
    const today = new Date().toISOString().split('T')[0];
    const history = this.getReflectionHistory();
    
    const existingIndex = history.reflections.findIndex(r => r.date === today);
    
    const reflection: DailyReflection = {
      id: existingIndex >= 0 ? history.reflections[existingIndex].id : crypto.randomUUID(),
      date: today,
      responses,
      completedAt: new Date().toISOString(),
      notes
    };

    if (existingIndex >= 0) {
      history.reflections[existingIndex] = reflection;
    } else {
      history.reflections.push(reflection);
    }

    // Sort by date descending
    history.reflections.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Update statistics
    history.totalDays = history.reflections.length;
    history.lastReflectionDate = today;
    history.streak = this.calculateStreak(history.reflections);

    localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(history));
  }

  static getReflectionHistory(): ReflectionHistory {
    const stored = localStorage.getItem(STORAGE_KEYS.REFLECTIONS);
    if (!stored) {
      return {
        reflections: [],
        totalDays: 0,
        streak: 0
      };
    }
    return JSON.parse(stored);
  }

  static getCustomQuestions(): ReflectionQuestion[] {
    const stored = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    if (!stored) {
      return defaultQuestions;
    }
    return JSON.parse(stored);
  }

  static saveCustomQuestions(questions: ReflectionQuestion[]): void {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }

  static resetToDefaultQuestions(): void {
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
  }

  static exportData(): string {
    const history = this.getReflectionHistory();
    const questions = this.getCustomQuestions();
    
    return JSON.stringify({
      exported: new Date().toISOString(),
      history,
      questions
    }, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.history) {
        localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(data.history));
      }
      
      if (data.questions) {
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(data.questions));
      }
      
      return true;
    } catch {
      return false;
    }
  }

  private static calculateStreak(reflections: DailyReflection[]): number {
    if (reflections.length === 0) return 0;

    const sortedReflections = reflections.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    let streak = 0;
    let currentDate = new Date();
    
    for (const reflection of sortedReflections) {
      const reflectionDate = new Date(reflection.date);
      const daysDiff = Math.floor(
        (currentDate.getTime() - reflectionDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysDiff === streak) {
        streak++;
        currentDate = reflectionDate;
      } else if (daysDiff === streak + 1 && streak === 0) {
        // Allow for yesterday if today isn't done yet
        streak++;
        currentDate = reflectionDate;
      } else {
        break;
      }
    }

    return streak;
  }
} 