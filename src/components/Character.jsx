import { motion } from 'framer-motion';
import { characters } from '../data/characters.js';

// Renderiza o personagem de uma seção.
// Usa a posição `mobile` em TODAS as telas (celular, tablet, pc, tv).
// Assim a visualização é a mesma em qualquer dispositivo.
export default function Character({ section, extra = '' }) {
  const c = characters[section];
  if (!c || !c.show) return null;

  const flip = c.flip ? -1 : 1;
  const base =
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] h-auto';

  return (
    <motion.img
      src={c.src}
      alt=""
      aria-hidden
      draggable={false}
      initial={{ opacity: 0, y: 16, scaleX: flip }}
      whileInView={{ opacity: 1, y: 0, scaleX: flip }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${base} ${c.width} ${c.mobile || ''} ${extra}`}
    />
  );
}
