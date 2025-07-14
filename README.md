# 🙏 Tägliche Reflexions-App

Eine umfassende Web-Anwendung für tägliche Reflexion als **Christ**, **Vater** und **Unternehmer**. Gebaut mit Astro.js und Tailwind CSS.

## ✨ Features

### 📝 Tägliche Reflexion
- **Strukturierte Fragen** in vier Kategorien:
  - 🙏 **Als gläubiger Christ**: Spirituelles Wachstum und Gottesbeziehung
  - 👨‍👧‍👦 **Als Vater & Ehemann**: Familie, Beziehungen und Vaterschaft  
  - 💼 **Als Unternehmer & Leader**: Business, Führung und berufliche Entwicklung
  - 💡 **Übergreifende Reflexion**: Dankbarkeit, Wachstum und ganzheitliche Betrachtung

### 📊 Historie & Statistiken
- **Reflexions-Kalender**: Visuelle Übersicht vergangener Reflexionen
- **Streak-Tracking**: Aktuelle und längste Reflexions-Serie
- **Fortschrittsmessung**: Durchschnittliche Reflexionen pro Woche
- **Filteroptionen**: Nach Zeitraum, Kategorie oder Suchtext

### ⚙️ Anpassbare Fragen
- **Fragen bearbeiten**: Bestehende Reflexionsfragen individuell anpassen
- **Neue Fragen hinzufügen**: Eigene Fragen in jeder Kategorie erstellen
- **Fragen aktivieren/deaktivieren**: Flexible Auswahl relevanter Fragen
- **Standard wiederherstellen**: Zurück zu den Original-Fragen

### 🤖 KI-Analyse (Vorbereitung)
- **Muster erkennen**: Analyse von Reflexions-Trends über Zeit
- **Persönliche Insights**: Erkenntnisse aus Antworten ableiten
- **Empfehlungen**: Konkrete Vorschläge für Wachstumsbereiche
- **Flexible Zeiträume**: Wöchentliche, monatliche oder quartalsweise Analyse

### 💾 Datenmanagement
- **Lokaler Speicher**: Alle Daten bleiben auf Ihrem Gerät
- **Export/Import**: Sicherung und Übertragung der Reflexions-Daten
- **Datenschutz**: Keine Cloud-Speicherung, vollständige Kontrolle

## 🚀 Installation & Start

### Lokale Entwicklung

```bash
# Repository klonen oder herunterladen
cd reflexion

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Für Produktion bauen
npm run build
```

Die App läuft standardmäßig auf `http://localhost:4321`

### 🌐 GitHub Pages Deployment

Ihre App ist für automatisches Deployment auf GitHub Pages vorbereitet:

1. **Repository erstellen** auf GitHub
2. **Code hochladen** zu Ihrem Repository
3. **GitHub Pages aktivieren**:
   - Gehen Sie zu Repository Settings → Pages
   - Source: "GitHub Actions" auswählen
4. **astro.config.mjs anpassen**:
   ```javascript
   site: 'https://IHR_USERNAME.github.io',
   base: '/IHR_REPOSITORY_NAME',
   ```
5. **Push zu main/master Branch** - das Deployment startet automatisch!

Die App wird dann verfügbar unter: `https://IHR_USERNAME.github.io/IHR_REPOSITORY_NAME`

#### GitHub Actions Workflow
- ✅ **Automatisches Build** bei jedem Push
- ✅ **Astro-optimierte Konfiguration**
- ✅ **Node.js 20** für beste Performance
- ✅ **Package Manager Detection** (npm/yarn)
- ✅ **Manueller Trigger** möglich

## 📋 Standard-Reflexionsfragen

### 🙏 Als gläubiger Christ
1. Habe ich heute Zeit in Gottes Gegenwart verbracht? (z.B. Gebet, Bibel, Stille)
2. Woran habe ich heute Gottes Gnade oder Führung erlebt?
3. Gab es etwas, das ich bereuen oder um Vergebung bitten sollte?
4. Habe ich heute meinen Glauben in Wort oder Tat bezeugt oder gelebt?
5. Habe ich jemanden geliebt, der es mir schwer gemacht hat?

### 👨‍👧‍👦 Als Vater & Ehemann
1. Habe ich heute aktiv und liebevoll Zeit mit meinen Kindern verbracht?
2. Habe ich meine Frau unterstützt, gehört oder ermutigt?
3. War ich präsent oder abgelenkt, wenn meine Familie mich gebraucht hat?
4. Was hat heute bei meinen Kindern Freude ausgelöst – und was Frust?
5. Was will ich morgen besser oder bewusster tun in meiner Vaterrolle?

### 💼 Als Unternehmer & Leader
1. Habe ich heute das Wichtigste getan – oder nur das Dringendste?
2. Habe ich heute in meinem Geschäft jemandem gedient oder geholfen?
3. War ich integer in Entscheidungen, Kommunikation und Verhalten?
4. Habe ich delegiert, was ich nicht selbst tun muss – oder alles festgehalten?
5. Was war heute mein größter Fortschritt – und was meine größte Herausforderung?

### 💡 Übergreifende Meta-Fragen
1. Was sagt mein Herz – bin ich gerade erfüllt oder leer?
2. Wofür bin ich heute dankbar?
3. Was will ich morgen konkret anders machen?
4. Was zeigt mir der Heilige Geist gerade über mein Leben oder mein Handeln?
5. Bin ich der Mann, Vater, Unternehmer, den Gott in mir sieht?

## 🛠 Technische Details

### Tech Stack
- **Astro.js**: Modernes Web-Framework für optimale Performance
- **Tailwind CSS**: Utility-first CSS Framework für responsive Design
- **TypeScript**: Type-sichere Entwicklung
- **Local Storage**: Client-seitige Datenspeicherung

### Projektstruktur
```
src/
├── components/          # UI-Komponenten
│   ├── DailyReflection.astro
│   ├── HistoryView.astro
│   └── Navigation.astro
├── data/               # Standard-Daten
│   └── defaultQuestions.ts
├── layouts/            # Seiten-Layouts  
│   └── Layout.astro
├── pages/              # Seiten-Routen
│   └── index.astro
├── types/              # TypeScript-Definitionen
│   └── reflection.ts
├── utils/              # Utility-Funktionen
│   └── storage.ts
└── styles/             # CSS-Dateien
    └── global.css
```

## 📱 Responsive Design

Die App ist vollständig responsive und funktioniert optimal auf:
- 🖥️ Desktop-Computern
- 📱 Smartphones  
- 📱 Tablets

## 🔒 Datenschutz & Sicherheit

- **Lokale Speicherung**: Alle Reflexions-Daten bleiben auf Ihrem Gerät
- **Keine Cloud-Verbindung**: Keine automatische Übertragung persönlicher Daten
- **Export-Kontrolle**: Sie entscheiden, wann und wohin Daten exportiert werden
- **Open Source**: Vollständig einsehbarer und verifizierbarer Code

## 🎯 Verwendungszweck

Diese App unterstützt Sie dabei:
- **Konstanz zu entwickeln** in der täglichen Selbstreflexion
- **Balance zu finden** zwischen den verschiedenen Lebensbereichen
- **Wachstum zu verfolgen** in Glauben, Familie und Business
- **Muster zu erkennen** in Ihren Antworten und Verhaltensweisen
- **Dankbarkeit zu kultivieren** durch bewusste Reflexion

## 🤝 Weiterentwicklung

Geplante Features für zukünftige Versionen:
- 🤖 **KI-Integration**: Automatische Analyse und Insights
- 📈 **Erweiterte Statistiken**: Detaillierte Auswertungen und Trends  
- 🏆 **Zielsetzung**: Definition und Verfolgung persönlicher Ziele
- 📱 **Mobile App**: Native iOS/Android-Anwendung
- ☁️ **Cloud-Sync** (optional): Sichere Synchronisation zwischen Geräten

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Sie können es frei verwenden, modifizieren und weiterverbreiten.

---

*"Erforsche mich, Gott, und erkenne mein Herz; prüfe mich und erkenne meine Gedanken!"* - Psalm 139,23
