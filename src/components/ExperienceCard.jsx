import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-black/5 dark:border-white/5 first:border-t-0"
    >
      <div className="md:col-span-4 space-y-3">
        <div className="eyebrow flex items-center gap-2">
          <Calendar size={12} strokeWidth={1.7} />
          {item.period}
        </div>
        <div className="flex items-center gap-2 text-xs text-mist-400">
          <MapPin size={12} strokeWidth={1.7} /> {item.location}
        </div>
      </div>

      <div className="md:col-span-8">
        <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink-900 dark:text-mist-50">
          {item.company}
        </h3>
        <p className="mt-1 text-sm text-accent-deep dark:text-accent">{item.role}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700 dark:text-mist-200 max-w-2xl">
          {item.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {item.bullets.map((b) => (
            <li key={b} className="chip">{b}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
