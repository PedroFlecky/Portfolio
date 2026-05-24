import { useState } from 'react';
import { projects } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Estudos & Projetos"
          title="Projetos autorais e sistemas em desenvolvimento."
          description="Iniciativas onde exploro criatividade, organização, inteligência artificial e construção de soluções digitais."
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
