import os
import re

dir_path = 'app/src'

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                full_path = os.path.join(root, file)
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Cleanup double classes
                content = re.sub(r'border border-slate-200 border border-slate-200', 'border border-slate-200', content)
                content = re.sub(r'border border-slate-300 border border-slate-300', 'border border-slate-300', content)
                content = re.sub(r'shadow-sm shadow-sm', 'shadow-sm', content)
                
                # For texts that should remain white on dark backgrounds
                # In UserPage avatar
                content = content.replace('bg-gradient-to-br from-indigo-600 to-[#8B84D7] flex items-center justify-center text-5xl font-bold text-slate-900', 'bg-gradient-to-br from-indigo-600 to-[#8B84D7] flex items-center justify-center text-5xl font-bold text-white')
                
                # Check UserPage buttons
                content = content.replace('bg-indigo-600 text-slate-900 font-bold', 'bg-indigo-600 text-white font-bold')

                if content != original_content:
                    with open(full_path, 'w', encoding='utf-8') as f:
                        f.write(content)

process_directory(dir_path)
print("Done cleanup.")