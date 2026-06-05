import { motion } from 'framer-motion';
import { experiences } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';
import ExperienceCard from './ExperienceCard.jsx';

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Por onde eu passei"
          title="Experiência."
          description="Dois estágios em ambientes bem diferentes. Foi onde eu peguei o ritmo de escritório de verdade."
        />

        <div className="relative">
          {/* Personagem sentado no PC, lado direito */}
          <motion.img
            src="/character/sentado-pc.png"
            alt=""
            aria-hidden
            draggable={false}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute -top-14 -right-4 xl:-right-12 w-32 xl:w-40 h-auto pointer-events-none select-none z-20 drop-shadow-[0_25px_30px_rgba(0,0,0,0.55)]"
          />

          <div className="surface-strong px-6 md:px-10 relative z-10">
            {experiences.map((item, i) => (
              <ExperienceCard key={item.company} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
