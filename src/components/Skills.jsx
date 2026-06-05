import { motion } from 'framer-motion';
import { skills } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Skills() {
  return (
    <section id="competencias" className="relative py-24 md:py-32">
      <div className="container-x">
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
