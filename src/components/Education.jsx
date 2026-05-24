import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education, courses } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Education() {
  return (
    <section id="formacao" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Formação & Cursos"
          title="Base acadêmica e desenvolvimento contínuo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Formação */}
          <div className="lg:col-span-7 surface-strong p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3 text-ink-900 dark:text-mist-100">
              <GraduationCap size={18} strokeWidth={1.6} className="text-accent" />
              <h3 className="text-sm tracking-wide uppercase">Formação</h3>
            </div>

            <ul className="divide-y divide-black/5 dark:divide-white/5">
              {education.map((e, i) => (
                <motion.li
                  key={e.degree}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <div>
                      <p className="font-display text-lg text-ink-900 dark:text-mist-50">{e.degree}</p>
                      <p className="mt-0.5 text-sm text-ink-600 dark:text-mist-300">{e.institution}</p>
                    </div>
                    <div className="text-xs text-mist-400 whitespace-nowrap">
                      {e.period} · {e.location}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div className="lg:col-span-5 surface-strong p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3 text-ink-900 dark:text-mist-100">
              <BookOpen size={18} strokeWidth={1.6} className="text-accent" />
              <h3 className="text-sm tracking-wide uppercase">Cursos & Treinamentos</h3>
            </div>

            <ul className="space-y-3">
              {courses.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-ink-700 dark:text-mist-200"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
