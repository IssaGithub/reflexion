# 🤖 KI-Integration Dokumentation

## Überblick

Die Reflexions-App verfügt über eine vollständig integrierte KI-Analyse-Funktion, die Ihre täglichen Reflexionen auswertet und wertvolle Erkenntnisse liefert.

## 🔧 Setup & Konfiguration

### 1. OpenAI API-Key erhalten

1. Besuchen Sie [OpenAI Platform](https://platform.openai.com/api-keys)
2. Erstellen Sie einen Account oder loggen Sie sich ein
3. Erstellen Sie einen neuen API-Key
4. Kopieren Sie den Key (beginnt mit `sk-`)

### 2. API-Key in der App konfigurieren

1. Öffnen Sie die App und navigieren Sie zum **"🤖 KI-Analyse"** Tab
2. Geben Sie Ihren API-Key in das entsprechende Feld ein
3. Wählen Sie das gewünschte Modell:
   - **GPT-4o Mini** (Empfohlen) - Kostengünstig, hohe Qualität
   - **GPT-4o** - Höchste Qualität, teurer
   - **GPT-4 Turbo** - Ausgewogen
   - **GPT-3.5 Turbo** - Günstigste Option

4. Stellen Sie die maximale Token-Anzahl ein (Standard: 2000)
5. Klicken Sie **"🔗 Verbindung testen"**
6. Bei Erfolg klicken Sie **"✅ Einstellungen speichern"**

## 💰 Kosten & Preise

### Modell-Preise (Stand Januar 2025)

| Modell | Input (pro 1M Tokens) | Output (pro 1M Tokens) | Empfehlung |
|--------|----------------------|------------------------|------------|
| GPT-4o Mini | $0.15 | $0.60 | ⭐ Beste Wahl |
| GPT-4o | $2.50 | $10.00 | Hohe Qualität |
| GPT-4 Turbo | $10.00 | $30.00 | Premium |
| GPT-3.5 Turbo | $0.50 | $1.50 | Budget |

### Kostenschätzung

Die App zeigt eine automatische Kostenschätzung basierend auf:
- Anzahl der Reflexionen im gewählten Zeitraum
- Länge der Antworten
- Gewähltes Modell

**Typische Kosten pro Analyse:**
- 1 Woche Reflexionen: $0.002 - $0.01
- 1 Monat Reflexionen: $0.01 - $0.05  
- 1 Quartal Reflexionen: $0.03 - $0.15

## 🎯 Funktionen & Möglichkeiten

### Analysezeiträume
- **Letzte Woche** (7 Tage)
- **Letzter Monat** (30 Tage)
- **Letztes Quartal** (90 Tage)

### Fokus-Bereiche
Sie können die Analyse auf spezielle Bereiche fokussieren:
- 🙏 **Glaube & Spiritualität**
- 👨‍👧‍👦 **Familie & Beziehungen**
- 💼 **Business & Führung**
- 💡 **Persönliches Wachstum**

### Prompt-Vorlagen
Schnelle Vorlagen für häufige Fragestellungen:
- "Wie kann ich meine Beziehung zu Gott vertiefen?"
- "Wie kann ich ein besserer Vater und Ehemann werden?"
- "Wie kann ich meine Führungsqualitäten als christlicher Unternehmer verbessern?"
- "Welche Work-Life-Balance Verbesserungen kann ich umsetzen?"

### Eigene Fragestellungen
Sie können auch eigene, spezifische Fragen stellen wie:
- "Wo erkenne ich spirituelle Wachstumsmuster?"
- "Wie hat sich meine Vaterrolle in den letzten Wochen entwickelt?"
- "Welche Business-Entscheidungen waren am erfolgreichsten?"

## 📊 Analyse-Ergebnisse

Die KI liefert strukturierte Ergebnisse:

### 📋 Zusammenfassung
Kurzer Überblick über den analysierten Zeitraum

### 💡 Erkenntnisse & Muster  
- Erkannte Trends in Ihren Antworten
- Wiederkehrende Themen
- Entwicklungen über Zeit

### 🎯 Empfehlungen
- Konkrete, umsetzbare Vorschläge
- Spezifisch für Ihre Lebensbereiche
- Biblisch fundierte Ratschläge

### ✅ Positive Entwicklungen
- Stärken und Fortschritte
- Erfolgreiche Gewohnheiten
- Wachstumsbereiche

### ⚠️ Wachstumsbereiche
- Bereiche für Verbesserung
- Potentielle Herausforderungen
- Entwicklungsmöglichkeiten

## 💾 Speichern & Exportieren

### Analyse speichern
- Bis zu 10 Analysen werden lokal gespeichert
- Automatische Verwaltung (älteste werden überschrieben)
- Schnelles Wiederladen gespeicherter Analysen

### Export-Funktionen
- **JSON-Export** für Backup oder Weitergabe
- Vollständige Analyse-Daten
- Kompatibel mit anderen Tools

## 🔒 Datenschutz & Sicherheit

### Lokale Speicherung
- **API-Key** wird nur lokal gespeichert
- **Reflexions-Daten** bleiben auf Ihrem Gerät
- **Keine automatische Cloud-Synchronisation**

### Datenübertragung
- Nur für Analyse-Anfragen an OpenAI
- Verschlüsselte HTTPS-Verbindung
- Keine langfristige Speicherung bei OpenAI

### Best Practices
1. **API-Key sicher verwenden**
   - Nicht öffentlich teilen
   - Regelmäßig rotieren
   - Bei Problemen sofort deaktivieren

2. **Sensitive Daten**
   - Vermeiden Sie Namen oder private Details in Reflexionen
   - Nutzen Sie allgemeine Begriffe
   - Prüfen Sie Antworten vor der Analyse

## 🛠 Technische Details

### Prompt Engineering
Die App verwendet speziell entwickelte Prompts:
- **Christlicher Kontext** berücksichtigt
- **Lebensbalance** zwischen Familie, Glaube und Business
- **Einfühlsame Beratung** ohne Verurteilung
- **Deutsche Sprache** optimiert

### API-Integration
- **RESTful API** zu OpenAI
- **Fehlerbehandlung** mit detaillierten Meldungen
- **Rate Limiting** respektiert
- **Token-Optimierung** für Kosteneffizienz

### Antwort-Parsing
- **Strukturierte Extraktion** aus KI-Antworten
- **Automatische Kategorisierung**
- **Fallback-Mechanismen** bei Parse-Fehlern

## 🐛 Troubleshooting

### Häufige Probleme

#### "API-Key ungültig"
- Überprüfen Sie das Format (muss mit `sk-` beginnen)
- Stellen Sie sicher, dass der Key aktiv ist
- Prüfen Sie Ihr OpenAI-Guthaben

#### "Keine Verbindung zu OpenAI"
- Internetverbindung prüfen
- Firewall/Proxy-Einstellungen überprüfen
- OpenAI-Service-Status prüfen

#### "Keine Reflexionen im Zeitraum"
- Wählen Sie einen längeren Zeitraum
- Erstellen Sie erst einige Reflexionen
- Prüfen Sie die Datumsbereiche

#### "Analyse dauert zu lange"
- Reduzieren Sie die maximale Token-Anzahl
- Wählen Sie einen kürzeren Zeitraum
- Verwenden Sie GPT-4o Mini

#### "Unerwartete Antworten"
- Prüfen Sie Ihre Prompt-Formulierung
- Verwenden Sie spezifischere Fragestellungen
- Probieren Sie verschiedene Fokus-Bereiche

### Support-Ressourcen

1. **OpenAI Documentation**: [platform.openai.com/docs](https://platform.openai.com/docs)
2. **API Status**: [status.openai.com](https://status.openai.com)
3. **Pricing**: [openai.com/pricing](https://openai.com/pricing)

## 🔮 Zukünftige Entwicklungen

### Geplante Features
- **Trend-Analysen** über längere Zeiträume
- **Vergleichsanalysen** zwischen Perioden
- **Automatische Erinnerungen** für Reflexion
- **PDF-Export** der Analysen
- **Weitere AI-Provider** (Anthropic Claude, etc.)

### Feedback & Verbesserungen
Die KI-Integration wird kontinuierlich verbessert basierend auf:
- Nutzer-Feedback
- Technologische Entwicklungen
- Neue OpenAI-Features
- Performance-Optimierungen

---

*"Prüft aber alles und das Gute behaltet." - 1. Thessalonicher 5,21* 