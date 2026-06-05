import { motion } from 'framer-motion';
import { about } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="sobre" className="relative pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container-x">
        <SectionTitle eyebrow={about.eyebrow} title={about.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-5 text-mist-200 text-base md:text-[1.05rem] leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Personagem */}
            <div className="relative flex justify-center pb-2">
              <div aria-hidden className="absolute inset-0 m-6 rounded-full bg-accent/15 blur-3xl" />
              <motion.img
                src="/character/mexendo-pc.png"
                alt="Pedro Felipe mexendo no computador"
                draggable={false}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 md:w-64 h-auto select-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="surface-strong p-6 md:p-8">
              <div className="eyebrow mb-6">Em síntese</div>
              <dl className="divide-y divide-white/5">
                {about.highlights.map((h) => (
                  <div key={h.label} className="grid grid-cols-3 gap-4 py-4 first:pt-0 last:pb-0">
                    <dt className="col-span-1 text-xs uppercase tracking-wider text-mist-400">
                      {h.label}
                    </dt>
                    <dd className="col-span-2 text-sm text-mist-100">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
