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
        {/* Personagem espiando atrás do título */}
        <motion.img
          src="/character/peek.png"
          alt=""
          aria-hidden
          draggable={false}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block absolute -top-4 right-2 lg:right-10 w-28 lg:w-32 h-auto pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
        />

        <SectionTitle
          eyebrow="Estudos & Projetos"
          title="Coisas que tô fazendo."
          description="Projetos autorais e sistemas em desenvolvimento. Tudo aqui é real, tá vivo, e segue evoluindo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
