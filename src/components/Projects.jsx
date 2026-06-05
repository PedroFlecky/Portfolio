import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Estudos & Projetos"
          title="Coisas que tô fazendo."
          description="Projetos autorais e sistemas em construção. Tudo aqui tá vivo e segue evoluindo."
        />

        <div className="relative">
          {/* Personagem espiando atrás do card da LIOST (primeiro card) */}
          <motion.img
            src="/character/atras-card.png"
            alt=""
            aria-hidden
            draggable={false}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute z-0 pointer-events-none select-none drop-shadow-[0_25px_30px_rgba(0,0,0,0.55)]
                       w-20 lg:w-24
                       -top-12 lg:-top-16
                       left-8 lg:left-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch relative z-10">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
