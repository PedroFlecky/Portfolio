import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/profile.js';
import { characters, characterClass } from '../data/characters.js';
import SectionTitle from './SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [active, setActive] = useState(null);
  const c = characters.projects;

  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Estudos & Projetos"
          title="Coisas que tô fazendo."
          description="Projetos autorais e sistemas em construção. Tudo aqui tá vivo e segue evoluindo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>

        {c.show && (
          <div className="relative h-48 md:h-56 lg:h-64 mt-4">
            <motion.img
              src={c.src}
              alt=""
              aria-hidden
              draggable={false}
              initial={{ opacity: 0, y: 20, scaleX: c.flip ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, scaleX: c.flip ? -1 : 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={characterClass('projects')}
            />
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
