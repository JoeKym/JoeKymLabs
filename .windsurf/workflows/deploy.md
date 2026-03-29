---
description: Build and deploy JoeKym Labs website to Render
echo: false
auto_execution_mode: 2
---

## Prerequisites
- Node.js 22+ installed
- Render account with web service configured
- Repository connected to Render (GitHub integration)

## Deployment Steps

1. **Navigate to app directory**
   ```bash
   cd app
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Build for production** (creates `dist/` folder)
   ```bash
   npm run build
   ```
   // turbo

4. **Verify build output**
   - Check that `app/dist/` folder exists with `index.html` and assets
   - Run `npm run preview` locally to test (optional)

5. **Push to GitHub** (triggers Render auto-deploy)
   ```bash
   git add .
   git commit -m "Build: production deployment"
   git push origin main
   ```

6. **Monitor Render deploy**
   - Go to Render Dashboard → Your Web Service
   - Check deploy logs for errors
   - Verify site loads at your Render URL

## Troubleshooting

**Blank page after deploy:**
- Check browser console for errors
- Verify `main.tsx` has correct imports
- Ensure ThemeProvider is properly configured

**Build fails with import errors:**
- Use local `./components/theme-provider` instead of `next-themes`
- Check that all imports exist in `src/` folder

**Theme not switching:**
- Verify `index.css` has both `:root` and `.dark` token definitions
- Check that `ThemeProvider` wraps the app in `main.tsx`
