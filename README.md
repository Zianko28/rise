# RiseGuide — PWA Setup Guide

Your personal evidence-based daily training app.

---

## Deploy to Vercel (free, ~5 minutes)

### Step 1 — Unzip this folder
Unzip `riseguide.zip` somewhere on your computer.

### Step 2 — Create a free Vercel account
Go to [vercel.com](https://vercel.com) and sign up (free — use your Google or GitHub account).

### Step 3 — Install the Vercel CLI (one-time setup)
Open Terminal (Mac) or Command Prompt (Windows) and run:
```
npm install -g vercel
```

### Step 4 — Deploy
In Terminal, navigate to the unzipped folder:
```
cd riseguide
vercel
```
Follow the prompts — accept all defaults. Vercel will give you a live URL like:
`https://riseguide-abc123.vercel.app`

That's it. Your app is live.

---

## Add to your phone home screen (makes it feel like a native app)

### iPhone
1. Open the Vercel URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Tap "Add"
RiseGuide now appears on your home screen like any app.

### Android
1. Open the Vercel URL in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home Screen"
4. Tap "Add"

---

## Updating the app later
1. Make changes to `src/App.jsx` (or ask Claude to update it)
2. Run `vercel` again from the project folder
3. App updates instantly at the same URL

---

## What's inside
- `src/App.jsx` — all lesson content and app logic
- `vite.config.js` — PWA configuration
- `public/` — icons and assets
- `index.html` — app entry point
