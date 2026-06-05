// ============================================================
// CONFIG DOS PERSONAGENS
// ============================================================
// Edita as posições, tamanhos e poses de cada personagem aqui.
// Salva o arquivo, o site recarrega sozinho no navegador.
//
// ATENÇÃO: aqui está sem variação por tela (mobile/desktop iguais).
// Em telas pequenas, valores em pixel podem ficar fora da tela.
//
// --- GUIA ---
//
// src       : caminho da imagem. Opções em /public/character/:
//             acenando, acenando-2, ajustando, apontando,
//             atras-card, mexendo-pc, olhando-por-cima,
//             peek, sentado-pc
//
// width     : largura. Ex:
//               'w-48'        → 192px (Tailwind padrão)
//               'w-[200px]'   → 200px exato (qualquer número)
//
// position  : onde fica. Classes absolute. Ex:
//               '-top-[40px]'                  → 40px pra cima
//               'left-[300px]'                 → 300px da esquerda
//               'left-1/2 -translate-x-1/2'    → centralizado
//
// flip      : true espelha horizontalmente.
// show      : false esconde o personagem.
// ============================================================

export const characters = {
  // ---------- HERO (topo do site) ----------
  hero: {
    src: '/character/acenando.png',
    width: 'w-72',
    flip: false,
    show: true,
    // hero não usa position absolute (fica numa coluna do grid).
  },

  // ---------- SOBRE ----------
  about: {
    src: '/character/mexendo-pc.png',
    width: 'w-56',
    position: '-top-36 -right-2',
    flip: false,
    show: true,
  },

  // ---------- CAMPOS DE DESENVOLVIMENTO (Areas) ----------
  areas: {
    src: '/character/apontando.png',
    width: 'w-[260px]',
    position: '-top-[10px] left-[700px]',
    flip: true, // aponta pra esquerda
    show: true,
  },

  // ---------- EXPERIÊNCIA ----------
  experience: {
    src: '/character/sentado-pc.png',
    width: 'w-52',
    position: '-top-[264px] left-[550px]',
    flip: false,
    show: true,
  },

  // ---------- PROJETOS (embaixo dos cards) ----------
  projects: {
    src: '/character/ajustando.png',
    width: 'w-48',
    position: 'top-[-80px] left-[300px] -translate-x-1/2',
    flip: false,
    show: true,
  },

  // ---------- CONTATO (em cima do card, apontando pra baixo) ----------
  contact: {
    src: '/character/olhando-por-cima.png',
    width: 'w-56',
    position: '-top-36 left-[270px] -translate-x-[65%]',
    flip: false,
    show: true,
  },
};

// ============================================================
// HELPER: monta className final pra um personagem absolute
// ============================================================
export function characterClass(key, extraClasses = '') {
  const c = characters[key];
  if (!c || !c.show) return '';

  return [
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]',
    c.width,
    c.position || '',
    extraClasses,
  ].filter(Boolean).join(' ');
}
