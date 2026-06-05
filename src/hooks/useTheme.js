import { useEffect } from 'react';

// Site usa apenas modo escuro — paleta premium foi feita para isso.
// Mantemos esse hook só para garantir que a classe `.dark` esteja sempre no <html>.
export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    try {
      localStorage.setItem('pf-theme', 'dark');
    } catch {}
  }, []);

  return { theme: 'dark', toggle: () => {} };
}
