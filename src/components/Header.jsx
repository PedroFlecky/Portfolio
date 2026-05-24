import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Linkedin } from 'lucide-react';
import { nav, profile } from '../data/profile.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-mist-50/70 dark:bg-ink-950/60 border-b border-black/5 dark:border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#inicio" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/10 dark:border-white/10 text-[11px] font-medium tracking-wider text-ink-900 dark:text-mist-50">
            PF
          </span>
          <span className="hidden sm:block text-sm tracking-tight text-ink-800 dark:text-mist-100">
            Pedro Felipe
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm link-quiet"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn — abrir em nova aba"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-ink-800 dark:text-mist-100 transition hover:border-accent/60 hover:text-accent"
          >
            <Linkedin size={14} strokeWidth={1.7} />
          </a>
          <a
            href={profile.whatsapp.url}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-xs tracking-wide text-ink-900 dark:text-mist-100 transition hover:border-accent/60 hover:text-accent"
          >
            <MessageCircle size={13} strokeWidth={1.7} />
            WhatsApp
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-mist-50/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-black/5 dark:border-white/5`}
      >
        <nav className="container-x flex flex-col py-4">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-sm link-quiet border-b border-black/5 dark:border-white/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3.5 py-2 text-sm"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3.5 py-2 text-sm"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
