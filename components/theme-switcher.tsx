'use client';

import { useTheme } from './providers/theme-provider';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex gap-2'>
      <button
        onClick={() => setTheme('github-light')}
        className={`rounded px-3 py-1 text-sm transition-colors ${
          theme === 'github-light' ? 'bg-accent text-white' : 'bg-hover-bg text-text-secondary hover:bg-accent/20'
        }`}>
        Light
      </button>
      <button
        onClick={() => setTheme('github-dark')}
        className={`rounded px-3 py-1 text-sm transition-colors ${
          theme === 'github-dark' ? 'bg-accent text-white' : 'bg-hover-bg text-text-secondary hover:bg-accent/20'
        }`}>
        Dark
      </button>
    </div>
  );
}
