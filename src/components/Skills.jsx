import { motion } from 'framer-motion';
import { skills } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Skills() {
  return (
    <section id="competencias" className="relative py-24 md:py-32">
      <div className="container-x relative">
        {/* Personagem acenando no canto direito */}
        <motion.img
          src="/character/ajustando.png"
          alt=""
          aria-hidden
          draggable={false}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block absolute -top-4 right-4 lg:right-12 w-36 lg:w-44 h-auto pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
        />

        <SectionTitle
          eyebrow="Como eu trabalho"
          title="O que me define no dia a dia."
          description="Princípios e hábitos que carrego pra dentro de qualquer projeto."
        />

        <div className="flex flex-wrap gap-2.5">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.025 }}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-mist-100 hover:border-accent/50 hover:text-accent transition"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
