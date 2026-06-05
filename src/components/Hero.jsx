import { motion } from 'framer-motion';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px] animate-float-slower" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-deep/10 blur-[140px] animate-float-slow" />
        <div className="absolute inset-0 bg-grain opacity-[0.35] mix-blend-overlay" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-7 order-2 lg:order-1">
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
              className="font-display text-[3rem] sm:text-[4.2rem] lg:text-[5rem] leading-[0.95] tracking-[-0.025em] text-mist-50"
            >
              {profile.shortName}
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 max-w-[34rem] text-base md:text-lg leading-relaxed text-mist-200"
            >
              {profile.heroSupport}
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
                className="group inline-flex items-center gap-2 rounded-full bg-mist-50 px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-accent"
              >
                <MessageCircle size={15} strokeWidth={1.8} />
                Falar comigo
              </a>
              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-mist-100 transition hover:border-accent/60 hover:text-accent"
              >
                Conhecer perfil
                <ArrowDownRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-2"
            >
              {profile.markers.map((m) => (
                <span key={m} className="chip">
                  <span className="h-1 w-1 rounded-full bg-accent/80" />
                  {m}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Coluna personagem */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* halo atrás do personagem */}
              <div aria-hidden className="absolute inset-0 -m-8 rounded-full bg-accent/20 blur-3xl" />
              <motion.img
                src="/character/acenando.png"
                alt="Pedro Felipe acenando"
                draggable={false}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-44 sm:w-56 lg:w-72 h-auto select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
              />
              {/* "balãozinho" discreto */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-2 -left-4 lg:-left-10 rounded-full border border-white/10 bg-ink-900/80 backdrop-blur px-3 py-1.5 text-xs text-mist-100 shadow-glass"
              >
                oi, prazer 👋
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="mt-16 hairline" />
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
