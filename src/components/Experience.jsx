import { motion } from 'framer-motion';
import { experiences } from '../data/profile.js';
import { characters, characterClass } from '../data/characters.js';
import SectionTitle from './SectionTitle.jsx';
import ExperienceCard from './ExperienceCard.jsx';

export default function Experience() {
  const c = characters.experience;

  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Por onde eu passei"
          title="Experiência."
          description="Dois estágios em ambientes bem diferentes. Foi onde eu peguei o ritmo de escritório de verdade."
        />

        <div className="relative">
          <div className="surface-strong px-6 md:px-10 relative z-10">
            {experiences.map((item, i) => (
              <ExperienceCard key={item.company} item={item} index={i} />
            ))}
          </div>

          {c.show && (
            <motion.img
              src={c.src}
              alt=""
              aria-hidden
              draggable={false}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={c.flip ? { transform: 'scaleX(-1)' } : undefined}
              className={characterClass('experience', 'z-20')}
            />
          )}
        </div>
      </div>
    </section>
  );
}
