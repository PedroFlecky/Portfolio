import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import ProjectMedia from './ProjectMedia.jsx';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      // Se o lightbox está aberto, ESC fecha só ele
      if (lightbox) setLightbox(null);
      else onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose, lightbox]);

  const hasGallery = project?.gallery && project.gallery.length > 0;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            aria-label="Fechar"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 backdrop-blur-xl shadow-glass"
          >
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink-900/70 backdrop-blur text-mist-200 hover:text-mist-50 hover:border-white/25 transition"
            >
              <X size={15} strokeWidth={1.7} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto">
              <div className="md:col-span-6 p-6 md:p-10 order-2 md:order-1">
                <div className="eyebrow mb-3">{project.status}</div>
                <h3
                  id="project-modal-title"
                  className="font-display text-3xl md:text-4xl tracking-tight text-mist-50 leading-[1.1]"
                >
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-accent">{project.category}</p>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-mist-200">
                  {project.longDescription}
                </p>

                <div className="mt-7">
                  <div className="eyebrow mb-2">Objetivo</div>
                  <p className="text-[0.95rem] leading-relaxed text-mist-200">
                    {project.objective}
                  </p>
                </div>

                <div className="mt-7">
                  <div className="eyebrow mb-3">O que demonstra</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {project.demonstrates.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-mist-200">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="chip py-0.5 text-[10px]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 relative order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/5 bg-ink-950">
                {hasGallery ? (
                  <Gallery items={project.gallery} onExpand={setLightbox} />
                ) : (
                  <div className="relative min-h-[260px] md:min-h-[520px] h-full">
                    <ProjectMedia project={project} variant="modal" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Gallery({ items, onExpand }) {
  return (
    <div className="p-3 md:p-5 md:sticky md:top-0 md:max-h-[92vh] md:overflow-y-auto">
      <div className="space-y-4">
        {items.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => onExpand(img)}
            aria-label={`Ampliar imagem: ${img.alt}`}
            className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-soft hover:border-accent/40 transition cursor-zoom-in"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-contain transition duration-700 group-hover:scale-[1.01]"
            />
            <span className="pointer-events-none absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/55 backdrop-blur text-mist-100 opacity-0 group-hover:opacity-100 transition">
              <Maximize2 size={12} strokeWidth={1.8} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            aria-label="Fechar imagem ampliada"
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-lg cursor-zoom-out"
          />

          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] max-w-[96vw] object-contain rounded-lg shadow-glass select-none"
            onClick={onClose}
          />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900/70 backdrop-blur text-mist-100 hover:text-mist-50 hover:border-white/30 transition"
          >
            <X size={16} strokeWidth={1.7} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
