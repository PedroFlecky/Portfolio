import { motion } from 'framer-motion';
import { characters } from '../data/characters.js';

// Renderiza o personagem de uma seção.
// Usa DUAS imagens: uma só aparece no mobile, outra só no desktop.
// Assim as classes de posição (ex: left-[500px]) ficam escritas
// por extenso e o Tailwind consegue gerá-las corretamente.
export default function Character({ section, extra = '' }) {
  const c = characters[section];
  if (!c || !c.show) return null;

  const flip = c.flip ? -1 : 1;
  const base =
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] h-auto';

  const common = {
    src: c.src,
    alt: '',
    'aria-hidden': true,
    draggable: false,
    initial: { opacity: 0, y: 16, scaleX: flip },
    whileInView: { opacity: 1, y: 0, scaleX: flip },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <>
      {/* MOBILE (some a partir de 768px) */}
      <motion.img
        {...common}
        className={`${base} block md:hidden ${c.width} ${c.mobile || ''} ${extra}`}
      />
      {/* DESKTOP (aparece a partir de 768px) */}
      <motion.img
        {...common}
        className={`${base} hidden md:block ${c.width} ${c.desktop || ''} ${extra}`}
      />
    </>
  );
}
