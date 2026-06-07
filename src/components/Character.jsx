import { motion } from 'framer-motion';
import { characters } from '../data/characters.js';

// Renderiza o personagem de uma seção.
// Desktop usa a posição `desktop:` | Celular usa a posição `mobile:`.
// As duas são independentes (mexer em uma não afeta a outra).
export default function Character({ section, extra = '' }) {
  const c = characters[section];
  if (!c || !c.show) return null;

  const flip = c.flip ? -1 : 1;
  const base =
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] h-auto';

  const anim = {
    initial: { opacity: 0, y: 16, scaleX: flip },
    whileInView: { opacity: 1, y: 0, scaleX: flip },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <>
      {/* Celular: visível só em telas pequenas */}
      <motion.img
        {...anim}
        src={c.src}
        alt=""
        aria-hidden
        draggable={false}
        className={`${base} ${c.width} ${c.mobile || ''} block md:hidden ${extra}`}
      />
      {/* Desktop/tablet/TV: visível de telas médias pra cima */}
      <motion.img
        {...anim}
        src={c.src}
        alt=""
        aria-hidden
        draggable={false}
        className={`${base} ${c.width} ${c.desktop || ''} hidden md:block ${extra}`}
      />
    </>
  );
}
