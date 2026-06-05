import { experiences } from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';
import ExperienceCard from './ExperienceCard.jsx';

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Por onde eu passei"
          title="Experiência."
          description="Dois estágios em ambientes bem diferentes. Foi onde eu peguei o ritmo de escritório de verdade."
        />

        <div className="surface-strong px-6 md:px-10">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
