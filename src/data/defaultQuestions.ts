import type { ReflectionQuestion, ReflectionCategory } from '../types/reflection.js';

export const categories: ReflectionCategory[] = [
  {
    id: 'glaube',
    name: 'Als gläubiger Christ',
    emoji: '🙏',
    description: 'Spirituelles Wachstum und Gottesbeziehung',
    color: 'bg-blue-100 border-blue-300 text-blue-800'
  },
  {
    id: 'familie',
    name: 'Als Vater & Ehemann',
    emoji: '👨‍👧‍👦',
    description: 'Familie, Beziehungen und Vaterschaft',
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  {
    id: 'business',
    name: 'Als Unternehmer & Leader',
    emoji: '💼',
    description: 'Business, Führung und berufliche Entwicklung',
    color: 'bg-purple-100 border-purple-300 text-purple-800'
  },
  {
    id: 'meta',
    name: 'Übergreifende Reflexion',
    emoji: '💡',
    description: 'Dankbarkeit, Wachstum und ganzheitliche Betrachtung',
    color: 'bg-orange-100 border-orange-300 text-orange-800'
  }
];

export const defaultQuestions: ReflectionQuestion[] = [
  // Glaube
  {
    id: 'glaube-1',
    text: 'Habe ich heute Zeit in Gottes Gegenwart verbracht? (z.B. Gebet, Bibel, Stille)',
    category: 'glaube',
    order: 1,
    isActive: true
  },
  {
    id: 'glaube-2',
    text: 'Woran habe ich heute Gottes Gnade oder Führung erlebt?',
    category: 'glaube',
    order: 2,
    isActive: true
  },
  {
    id: 'glaube-3',
    text: 'Gab es etwas, das ich bereuen oder um Vergebung bitten sollte?',
    category: 'glaube',
    order: 3,
    isActive: true
  },
  {
    id: 'glaube-4',
    text: 'Habe ich heute meinen Glauben in Wort oder Tat bezeugt oder gelebt?',
    category: 'glaube',
    order: 4,
    isActive: true
  },
  {
    id: 'glaube-5',
    text: 'Habe ich jemanden geliebt, der es mir schwer gemacht hat?',
    category: 'glaube',
    order: 5,
    isActive: true
  },

  // Familie
  {
    id: 'familie-1',
    text: 'Habe ich heute aktiv und liebevoll Zeit mit meinen Kindern verbracht?',
    category: 'familie',
    order: 1,
    isActive: true
  },
  {
    id: 'familie-2',
    text: 'Habe ich meine Frau unterstützt, gehört oder ermutigt?',
    category: 'familie',
    order: 2,
    isActive: true
  },
  {
    id: 'familie-3',
    text: 'War ich präsent oder abgelenkt, wenn meine Familie mich gebraucht hat?',
    category: 'familie',
    order: 3,
    isActive: true
  },
  {
    id: 'familie-4',
    text: 'Was hat heute bei meinen Kindern Freude ausgelöst – und was Frust?',
    category: 'familie',
    order: 4,
    isActive: true
  },
  {
    id: 'familie-5',
    text: 'Was will ich morgen besser oder bewusster tun in meiner Vaterrolle?',
    category: 'familie',
    order: 5,
    isActive: true
  },

  // Business
  {
    id: 'business-1',
    text: 'Habe ich heute das Wichtigste getan – oder nur das Dringendste?',
    category: 'business',
    order: 1,
    isActive: true
  },
  {
    id: 'business-2',
    text: 'Habe ich heute in meinem Geschäft jemandem gedient oder geholfen?',
    category: 'business',
    order: 2,
    isActive: true
  },
  {
    id: 'business-3',
    text: 'War ich integer in Entscheidungen, Kommunikation und Verhalten?',
    category: 'business',
    order: 3,
    isActive: true
  },
  {
    id: 'business-4',
    text: 'Habe ich delegiert, was ich nicht selbst tun muss – oder alles festgehalten?',
    category: 'business',
    order: 4,
    isActive: true
  },
  {
    id: 'business-5',
    text: 'Was war heute mein größter Fortschritt – und was meine größte Herausforderung?',
    category: 'business',
    order: 5,
    isActive: true
  },

  // Meta-Fragen
  {
    id: 'meta-1',
    text: 'Was sagt mein Herz – bin ich gerade erfüllt oder leer?',
    category: 'meta',
    order: 1,
    isActive: true
  },
  {
    id: 'meta-2',
    text: 'Wofür bin ich heute dankbar?',
    category: 'meta',
    order: 2,
    isActive: true
  },
  {
    id: 'meta-3',
    text: 'Was will ich morgen konkret anders machen?',
    category: 'meta',
    order: 3,
    isActive: true
  },
  {
    id: 'meta-4',
    text: 'Was zeigt mir der Heilige Geist gerade über mein Leben oder mein Handeln?',
    category: 'meta',
    order: 4,
    isActive: true
  },
  {
    id: 'meta-5',
    text: 'Bin ich der Mann, Vater, Unternehmer, den Gott in mir sieht?',
    category: 'meta',
    order: 5,
    isActive: true
  }
]; 