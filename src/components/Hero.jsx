import { motion } from 'framer-motion';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 md:pt-44 pb-24 md:pb-32">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px] animate-float-slower" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-deep/10 blur-[140px] animate-float-slow" />
        <div className="absolute inset-0 bg-grain opacity-[0.35] mix-blend-overlay" />
        {/* Soft grid lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-current opacity-50" />
          Portfólio · Currículo Visual
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.95] tracking-[-0.025em] text-ink-900 dark:text-mist-50"
        >
          {profile.shortName}
          <span className="text-accent/80 dark:text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-[34rem] text-base md:text-lg leading-relaxed text-ink-700 dark:text-mist-200"
        >
          Estudante de Administração com foco em processos,
          <br className="hidden md:inline" />{' '}
          IA criativa e construção de soluções digitais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.whatsapp.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 dark:bg-mist-50 px-5 py-3 text-sm font-medium text-mist-50 dark:text-ink-900 transition hover:bg-accent-deep dark:hover:bg-accent"
          >
            <MessageCircle size={15} strokeWidth={1.8} />
            Entrar em contato
          </a>
          <a
            href="#sobre"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm text-ink-900 dark:text-mist-100 transition hover:border-accent/60 hover:text-accent"
          >
            Conhecer perfil
            <ArrowDownRight size={15} strokeWidth={1.7} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center gap-2"
        >
          {profile.markers.map((m) => (
            <span key={m} className="chip">
              <span className="h-1 w-1 rounded-full bg-accent/80" />
              {m}
            </span>
          ))}
        </motion.div>

        {/* Bottom meta row */}
        <div className="mt-20 hairline" />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-mist-400">
          <div className="flex items-center gap-6">
            <span>{profile.location}</span>
            <span className="hidden md:inline">{profile.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
            Aberto a oportunidades
          </div>
        </div>
      </div>
    </section>
  );
}
