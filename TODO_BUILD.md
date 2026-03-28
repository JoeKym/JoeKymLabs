# Fix Vite Build Error: next-themes Missing dist/types

## Status: In Progress

**Root Cause:** next-themes package lacks './dist/types' export specifier in package.json; Vite build resolver fails.

**Solution:** Remove dep, replace with custom ThemeProvider (React Context + Tailwind dark mode).

## Steps:
1. [x] Edit `app/package.json` - remove next-themes
2. [x] Rewrite `app/src/components/theme-provider.tsx` - custom impl (useTheme exported, enableSystem supported)
3. [x] Update `app/vite.config.ts` - add safety config
4. [ ] `cd app & npm install`
5. [ ] `npm run build` (verify)
6. [ ] `npm run dev` - test theme toggle
7. [ ] `npm audit fix`
8. [ ] Deploy to Render

**Completed:** Steps 1-3
