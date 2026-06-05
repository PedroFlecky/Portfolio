import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative py-10 md:py-12 border-t border-white/5 first:border-t-0"
    >
      {/* Topo: meta info em linha */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-mist-400 mb-5">
        <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.2em] text-mist-300">
          <Calendar size={12} strokeWidth={1.7} />
          {item.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={12} strokeWidth={1.7} /> {item.location}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl tracking-tight text-mist-50">
        {item.company}
      </h3>
      <p className="mt-1 text-sm text-accent">{item.role}</p>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-mist-200 max-w-3xl">
        {item.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {item.bullets.map((b) => (
          <li key={b} className="chip">{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}
