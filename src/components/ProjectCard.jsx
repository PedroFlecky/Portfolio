import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectMedia from './ProjectMedia.jsx';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      aria-label={`Abrir detalhes do projeto ${project.name}`}
      className="group relative text-left flex flex-col h-full surface overflow-hidden transition-colors hover:border-accent/40 dark:hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
    >
      {/* Brilho sutil no hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: '0 0 0 1px rgba(122,162,200,0.18), 0 20px 60px -20px rgba(122,162,200,0.25)' }}
      />

      {/* Mídia conceitual */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 dark:border-white/5">
        <div className="absolute inset-0 transition duration-700 group-hover:scale-[1.03]">
          <ProjectMedia project={project} variant="card" />
        </div>
        <div className="absolute left-3 top-3">
          <span className="chip backdrop-blur-md bg-black/30 border-white/15 text-mist-100">
            {project.status}
          </span>
        </div>
      </div>

      {/* Conteúdo — flex column para empurrar o footer */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg md:text-xl tracking-tight text-ink-900 dark:text-mist-50">
            {project.name}
          </h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-mist-400 whitespace-nowrap pt-1">
            {project.category.split('·')[0].trim()}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-mist-300 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="chip py-0.5 text-[10px]">{t}</span>
          ))}
        </div>

        {/* Footer fixo no rodapé do card */}
        <div className="mt-auto pt-6">
          <div className="border-t border-black/5 dark:border-white/5 pt-4 flex items-center justify-between text-xs text-mist-400 group-hover:text-accent transition-colors">
            <span>Ver detalhes</span>
            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
