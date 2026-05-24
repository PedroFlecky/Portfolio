import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Linkedin } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[34rem] w-[60rem] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="surface-strong px-6 md:px-14 py-14 md:py-20 text-center"
        >
          <div className="eyebrow mb-5">Contato</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-ink-900 dark:text-mist-50 max-w-3xl mx-auto leading-[1.1]">
            Vamos conversar.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-ink-600 dark:text-mist-300 text-base md:text-lg leading-relaxed">
            Entre em contato para oportunidades profissionais, projetos, parcerias ou conversas estratégicas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto">
            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 dark:bg-mist-50 px-6 py-3.5 text-sm font-medium text-mist-50 dark:text-ink-900 transition hover:bg-accent-deep dark:hover:bg-accent"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-6 py-3.5 text-sm text-ink-900 dark:text-mist-100 transition hover:border-accent/60 hover:text-accent"
            >
              <Mail size={15} strokeWidth={1.7} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Abrir perfil no LinkedIn em nova aba"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-6 py-3.5 text-sm text-ink-900 dark:text-mist-100 transition hover:border-accent/60 hover:text-accent"
            >
              <Linkedin size={15} strokeWidth={1.7} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-mist-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} /> {profile.location}
            </span>
            <span>{profile.whatsapp.display}</span>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-mist-400">
          <p>© {new Date().getFullYear()} {profile.fullName}. Todos os direitos reservados.</p>
          <p>Portfólio pessoal · Construído com cuidado.</p>
        </footer>
      </div>
    </section>
  );
}
