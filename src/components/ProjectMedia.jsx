// Renderiza a área de mídia do projeto.
// Se houver `media`, mostra imagem/vídeo.
// Caso contrário, escolhe um placeholder conceitual elegante.

export default function ProjectMedia({ project, variant = 'card' }) {
  if (project.media) {
    if (/\.(mp4|webm)$/i.test(project.media)) {
      return (
        <video
          src={project.media}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      );
    }
    return (
      <img
        src={project.media}
        alt={project.name}
        className="h-full w-full object-cover"
      />
    );
  }

  switch (project.mediaPlaceholder) {
    case 'brand':
      return <BrandPlaceholder project={project} variant={variant} />;
    case 'app':
      return <AppPlaceholder project={project} variant={variant} />;
    case 'concept':
      return <ConceptPlaceholder project={project} variant={variant} />;
    default:
      return <BrandPlaceholder project={project} variant={variant} />;
  }
}

function Base({ children, label }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950">
      <div className="absolute -inset-24 bg-accent/10 blur-[110px]" />
      <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay" />
      {children}
      {label && (
        <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.22em] text-mist-400">
          {label}
        </div>
      )}
    </div>
  );
}

function BrandPlaceholder({ project, variant }) {
  return (
    <Base label={project.mediaNote}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-display text-5xl md:text-6xl tracking-[0.04em] text-mist-50/90">
            LIOST
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-mist-400">
            Creative Studio · AI
          </div>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </div>
      </div>
      {variant === 'modal' && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lgrid)" />
        </svg>
      )}
    </Base>
  );
}

function AppPlaceholder({ project, variant }) {
  return (
    <Base label={project.mediaNote}>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {/* Mockup de "phone" minimalista */}
        <div className="relative w-[60%] max-w-[220px] aspect-[9/16] rounded-[1.6rem] border border-white/10 bg-ink-900/80 shadow-glass overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 h-1 w-12 rounded-full bg-white/15" />
          <div className="p-4 pt-7">
            <div className="text-[9px] uppercase tracking-[0.3em] text-mist-400">Hoje</div>
            <div className="mt-1 font-display text-base text-mist-50">Plannit</div>
            <div className="mt-4 space-y-2">
              {['Revisar pauta', 'Estudo · UFES', 'Bloco criativo', 'Finanças'].map((t, i) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-2"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-white/20'}`} />
                  <span className="text-[10px] text-mist-200">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

function ConceptPlaceholder({ project, variant }) {
  const modules = project.conceptModules || [];
  return (
    <Base label={project.mediaNote}>
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="grid grid-cols-3 gap-2 w-full max-w-[320px]">
          {modules.map((m, i) => (
            <div
              key={m}
              className="rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm px-2 py-3 text-center"
              style={{ opacity: 0.6 + (i % 3) * 0.13 }}
            >
              <div className="mx-auto mb-1.5 h-1 w-1 rounded-full bg-accent" />
              <div className="text-[10px] uppercase tracking-[0.15em] text-mist-200">{m}</div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}
