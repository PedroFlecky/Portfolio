import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className={`group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist-200 transition hover:border-white/20 hover:text-mist-50 dark:border-white/10 ${className}`}
      style={{}}
    >
      {isDark ? <Sun size={15} strokeWidth={1.6} /> : <Moon size={15} strokeWidth={1.6} />}
    </button>
  );
}
