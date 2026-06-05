import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index, onOpen }) {
  const num = String(index + 1).padStart(2, '0');

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
      className="group relative text-left flex flex-col h-full surface overflow-hidden transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
    >
      {/* Brilho sutil no hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow:
            '0 0 0 1px rgba(122,162,200,0.18), 0 20px 60px -20px rgba(122,162,200,0.25)',
        }}
      />

      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Topo: número + status */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-mono text-xs tracking-[0.25em] text-mist-400">
            {num} <span className="opacity-50">/ 03</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-mist-400">
            <span className="h-1 w-1 rounded-full bg-accent/80" />
            {project.status}
          </span>
        </div>

        {/* Nome do projeto */}
        <h3 className="font-display text-2xl md:text-[1.75rem] leading-[1.05] tracking-tight text-mist-50">
          {project.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent/90">
          {project.category.split('·')[0].trim()}
        </p>

        {/* Descrição */}
        <p className="mt-6 text-sm leading-relaxed text-mist-300 line-clamp-4">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="chip py-0.5 text-[10px]">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8">
          <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-mist-400 group-hover:text-accent transition-colors">
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
