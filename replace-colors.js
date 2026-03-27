import fs from 'fs';
import path from 'path';

const dir = 'app/src';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Opacity modifiers for text-white
      content = content.replace(/text-white\/80/g, 'text-slate-700');
      content = content.replace(/text-white\/70/g, 'text-slate-600');
      content = content.replace(/text-white\/50/g, 'text-slate-500');
      content = content.replace(/text-white\/40/g, 'text-slate-400');
      content = content.replace(/text-white\/30/g, 'text-slate-400');
      content = content.replace(/text-white\/20/g, 'text-slate-300');
      content = content.replace(/text-white\/10/g, 'text-slate-200');

      // Opacity modifiers for bg-white
      content = content.replace(/hover:bg-white\/20/g, 'hover:bg-slate-200');
      content = content.replace(/hover:bg-white\/10/g, 'hover:bg-slate-100');
      content = content.replace(/hover:bg-white\/\[0\.02\]/g, 'hover:bg-slate-50');
      content = content.replace(/bg-white\/20/g, 'bg-slate-200');
      content = content.replace(/bg-white\/10/g, 'bg-slate-100');
      content = content.replace(/bg-white\/5/g, 'bg-white shadow-sm border border-slate-200');

      // Opacity modifiers for border-white
      content = content.replace(/hover:border-white\/20/g, 'hover:border-slate-300');
      content = content.replace(/hover:border-white\/10/g, 'hover:border-slate-200');
      content = content.replace(/border-white\/20/g, 'border-slate-300');
      content = content.replace(/border-white\/10/g, 'border-slate-200');
      content = content.replace(/border-white\/5/g, 'border-slate-200');
      content = content.replace(/divide-white\/5/g, 'divide-slate-200');

      // Black backgrounds (inputs etc)
      content = content.replace(/bg-black\/40/g, 'bg-white border border-slate-300 shadow-inner');
      content = content.replace(/bg-black\/20/g, 'bg-slate-50 border border-slate-200');

      // Colors
      content = content.replace(/bg-\[\#07080A\]/g, 'bg-slate-50');
      content = content.replace(/text-\[\#F7F8FA\]/g, 'text-slate-900');
      content = content.replace(/text-\[\#A6ACB8\]/g, 'text-slate-600');
      
      // Accents
      content = content.replace(/text-\[\#B8B2F7\]/g, 'text-indigo-600');
      content = content.replace(/bg-\[\#B8B2F7\]/g, 'bg-indigo-600');
      content = content.replace(/border-\[\#B8B2F7\]/g, 'border-indigo-600');
      content = content.replace(/from-\[\#B8B2F7\]/g, 'from-indigo-600');
      content = content.replace(/via-\[\#B8B2F7\]/g, 'via-indigo-600');
      content = content.replace(/to-\[\#B8B2F7\]/g, 'to-indigo-600');
      
      // Gradients from background
      content = content.replace(/from-\[\#07080A\]/g, 'from-slate-50');
      content = content.replace(/via-\[\#07080A\]/g, 'via-slate-50');
      content = content.replace(/to-\[\#07080A\]/g, 'to-slate-50');
      content = content.replace(/from-black\/80/g, 'from-slate-900/80');
      content = content.replace(/from-black\/60/g, 'from-slate-900/60');

      // Selections
      content = content.replace(/selection:bg-\[\#B8B2F7\]/g, 'selection:bg-indigo-100');
      content = content.replace(/selection:text-\[\#07080A\]/g, 'selection:text-indigo-900');

      // text-white -> text-slate-900 (except in buttons where it should stay white)
      content = content.replace(/text-white(?!(\/| space))/g, 'text-slate-900');

      // Now map #07080A text (used on accent buttons) to white
      content = content.replace(/text-\[\#07080A\]/g, 'text-white');
      
      // In Navigation, text-slate-900 on bg-indigo-600 should be text-white
      content = content.replace(/bg-indigo-600 text-slate-900/g, 'bg-indigo-600 text-white');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDirectory(dir);
console.log('Done replacing colors.');
