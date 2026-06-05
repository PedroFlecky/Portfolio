import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Linkedin } from 'lucide-react';
import { profile } from '../data/profile.js';
import { characters, characterClass } from '../data/characters.js';

export default function Contact() {
  const c = characters.contact;
  return (
    <section id="contato" className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[34rem] w-[60rem] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="container-x relative">
        <div className="relative max-w-3xl mx-auto">
          {/* Personagem (controlado via src/data/characters.js) */}
          {c.show && (
            <motion.img
              src={c.src}
              alt=""
              aria-hidden
              draggable={false}
              initial={{ opacity: 0, y: -16, scaleX: c.flip ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, scaleX: c.flip ? -1 : 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={characterClass('contact', 'z-20')}
            />
          )}

          {/* Card de contato com borda mais definida */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 rounded-3xl border-2 border-white/15 bg-ink-900/70 backdrop-blur-xl px-6 md:px-14 pt-16 md:pt-20 pb-14 md:pb-16 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="eyebrow mb-5">Contato</div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-mist-50 max-w-3xl mx-auto leading-[1.05]">
              Bora trocar uma ideia?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-mist-300 text-base md:text-lg leading-relaxed">
              Oportunidade, projeto, parceria ou só uma boa conversa. Me chama.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto">
              <a
                href={profile.whatsapp.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mist-50 px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-accent"
              >
                <MessageCircle size={16} strokeWidth={1.8} />
                WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-mist-100 transition hover:border-accent/60 hover:text-accent"
              >
                <Mail size={15} strokeWidth={1.7} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Abrir perfil no LinkedIn em nova aba"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-mist-100 transition hover:border-accent/60 hover:text-accent"
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
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-mist-400">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <p>Construído por mim, do zero.</p>
        </footer>
      </div>
    </section>
  );
}
