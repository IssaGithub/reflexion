# 🚀 GitHub Pages Deployment Setup

## Schritt-für-Schritt Anleitung

### 1. GitHub Repository erstellen
1. Gehen Sie zu [GitHub.com](https://github.com)
2. Klicken Sie auf "New repository"
3. Repository-Name: `reflexion` (oder einen Namen Ihrer Wahl)
4. Repository auf "Public" setzen
5. "Create repository" klicken

### 2. Code zu GitHub hochladen

```bash
# In Ihrem lokalen Projekt-Verzeichnis
git init
git add .
git commit -m "Initial commit: Tägliche Reflexions-App"
git branch -M main
git remote add origin https://github.com/IHR_USERNAME/reflexion.git
git push -u origin main
```

### 3. Astro-Konfiguration anpassen

Bearbeiten Sie `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://IHR_USERNAME.github.io',    // ← Ihr GitHub Username
  base: '/reflexion',                         // ← Ihr Repository Name
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets'
  }
});
```

### 4. GitHub Pages aktivieren

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf "Settings" (Repository-Settings)
3. Scrollen Sie zu "Pages" im linken Menü
4. Bei "Source" wählen Sie: **"GitHub Actions"**
5. Speichern

### 5. Deployment starten

```bash
# Änderungen committen und pushen
git add astro.config.mjs
git commit -m "Configure for GitHub Pages deployment"
git push
```

Das GitHub Actions Workflow startet automatisch und deployed Ihre App!

## 📍 URL Ihrer deployed App

Nach erfolgreichem Deployment ist Ihre App verfügbar unter:
```
https://IHR_USERNAME.github.io/reflexion
```

## 🔧 Deployment-Status überprüfen

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf "Actions" Tab
3. Sie sehen den Deployment-Status
4. Grüner Haken = erfolgreich deployed
5. Roter Kreis = Fehler (Details in den Logs)

## 🔄 Updates deployen

Jeder Push zum `main` Branch triggert automatisch ein neues Deployment:

```bash
# Änderungen machen
git add .
git commit -m "Update: Neue Features hinzugefügt"
git push
```

## 🛠 Troubleshooting

### Häufige Probleme:

1. **404 Fehler**: 
   - Überprüfen Sie `base` in `astro.config.mjs`
   - Stellen Sie sicher, dass GitHub Pages auf "GitHub Actions" gestellt ist

2. **CSS/JS nicht geladen**:
   - Überprüfen Sie `site` URL in `astro.config.mjs`
   - Stellen Sie sicher, dass `.nojekyll` Datei existiert

3. **Build-Fehler**:
   - Überprüfen Sie Actions Tab für detaillierte Logs
   - Stellen Sie sicher, dass `package.json` alle Dependencies enthält

### Build lokal testen:

```bash
npm run build
npm run preview
```

## 📱 Custom Domain (Optional)

Für eine eigene Domain:

1. Erstellen Sie `public/CNAME` Datei mit Ihrer Domain
2. Konfigurieren Sie DNS bei Ihrem Domain-Provider
3. Passen Sie `site` in `astro.config.mjs` an

```javascript
site: 'https://ihre-domain.de',
base: '/',  // Root domain
```

## 🔒 Sicherheit

- Alle Reflexions-Daten bleiben lokal im Browser
- GitHub Pages hosted nur die statische App
- Keine persönlichen Daten werden auf GitHub gespeichert 