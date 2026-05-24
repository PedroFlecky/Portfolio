import { motion } from 'framer-motion';
import { areas } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';
import {
  Layers, Sparkles, Palette, Workflow, FlaskConical, Wrench,
} from 'lucide-react';

const icons = [Layers, Sparkles, Palette, Workflow, FlaskConical, Wrench];

export default function Areas() {
  return (
    <section id="areas" className="relative pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Campos de Desenvolvimento"
          title="Entre organização, tecnologia e criatividade aplicada."
          description="Frentes que conectam minha base administrativa ao interesse por tecnologia, criação e melhoria de processos."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {areas.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group surface p-6 md:p-7 transition-colors hover:border-accent/30 dark:hover:border-accent/30"
              >
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/5 dark:border-white/10 text-accent">
                  <Icon size={17} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg md:text-xl tracking-tight text-ink-900 dark:text-mist-50">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-mist-300">
                  {a.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
