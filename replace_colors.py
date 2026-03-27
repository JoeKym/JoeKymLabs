import os
import re

dir_path = 'app/src'

replacements = [
    (r'text-white/80', 'text-slate-700'),
    (r'text-white/70', 'text-slate-600'),
    (r'text-white/50', 'text-slate-500'),
    (r'text-white/40', 'text-slate-400'),
    (r'text-white/30', 'text-slate-400'),
    (r'text-white/20', 'text-slate-300'),
    (r'text-white/10', 'text-slate-200'),

    (r'hover:bg-white/20', 'hover:bg-slate-200'),
    (r'hover:bg-white/10', 'hover:bg-slate-100'),
    (r'hover:bg-white/\[0\.02\]', 'hover:bg-slate-50'),
    (r'bg-white/20', 'bg-slate-200'),
    (r'bg-white/10', 'bg-slate-100'),
    (r'bg-white/5', 'bg-white shadow-sm border border-slate-200'),

    (r'hover:border-white/20', 'hover:border-slate-300'),
    (r'hover:border-white/10', 'hover:border-slate-200'),
    (r'border-white/20', 'border-slate-300'),
    (r'border-white/10', 'border-slate-200'),
    (r'border-white/5', 'border-slate-200'),
    (r'divide-white/5', 'divide-slate-200'),

    (r'bg-black/40', 'bg-white border border-slate-300 shadow-inner'),
    (r'bg-black/20', 'bg-slate-50 border border-slate-200'),

    (r'bg-\[\#07080A\]', 'bg-slate-50'),
    (r'text-\[\#F7F8FA\]', 'text-slate-900'),
    (r'text-\[\#A6ACB8\]', 'text-slate-600'),
    
    (r'text-\[\#B8B2F7\]', 'text-indigo-600'),
    (r'bg-\[\#B8B2F7\]', 'bg-indigo-600'),
    (r'border-\[\#B8B2F7\]', 'border-indigo-600'),
    (r'from-\[\#B8B2F7\]', 'from-indigo-600'),
    (r'via-\[\#B8B2F7\]', 'via-indigo-600'),
    (r'to-\[\#B8B2F7\]', 'to-indigo-600'),
    
    (r'from-\[\#07080A\]', 'from-slate-50'),
    (r'via-\[\#07080A\]', 'via-slate-50'),
    (r'to-\[\#07080A\]', 'to-slate-50'),
    (r'from-black/80', 'from-slate-900/80'),
    (r'from-black/60', 'from-slate-900/60'),

    (r'selection:bg-\[\#B8B2F7\]', 'selection:bg-indigo-100'),
    (r'selection:text-\[\#07080A\]', 'selection:text-indigo-900'),

    (r'text-white(?!(\/| space))', 'text-slate-900'),
    (r'text-\[\#07080A\]', 'text-white'),
    (r'bg-indigo-600 text-slate-900', 'bg-indigo-600 text-white'),
]

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                full_path = os.path.join(root, file)
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                for pattern, replacement in replacements:
                    content = re.sub(pattern, replacement, content)
                
                if content != original_content:
                    with open(full_path, 'w', encoding='utf-8') as f:
                        f.write(content)

process_directory(dir_path)
print("Done replacing colors.")