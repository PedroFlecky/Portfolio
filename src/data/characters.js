// ============================================================
// CONFIG DOS PERSONAGENS
// ============================================================
// Edita as posições, tamanhos e poses de cada personagem aqui.
// Salva o arquivo, o site recarrega sozinho no navegador.
//
// --- GUIA RÁPIDO ---
//
// src        : caminho da imagem. Trocar pose = trocar o arquivo.
//              Opções disponíveis em /public/character/:
//                acenando, acenando-2, ajustando, apontando,
//                atras-card, mexendo-pc, olhando-por-cima,
//                peek, sentado-pc
//
// width      : largura. Classes Tailwind. Aumenta o número = maior.
//              Ex: 'w-32'  ≈ 8rem (128px)
//                  'w-40'  ≈ 10rem (160px)
//                  'w-48'  ≈ 12rem (192px)
//                  'w-56'  ≈ 14rem (224px)
//              Pra variar por tela: 'w-32 md:w-40 lg:w-52'
//
// position   : onde fica. Classes Tailwind absolute.
//              top-X / -top-X       → distância do topo (negativo sai pra cima)
//              left-X / -left-X     → distância da esquerda
//              right-X / -right-X   → distância da direita
//              X em múltiplos de 4 (4 = 1rem). Ex: top-8, -top-12, right-24
//              Pra centralizar: 'left-1/2 -translate-x-1/2'
//              Pra variar por tela: 'top-4 lg:top-8'
//
// flip       : true inverte horizontalmente (espelha).
//
// show       : false esconde o personagem dessa seção.
//
// hideOn     : esconde o personagem em certos tamanhos de tela.
//              'mobile' = some no mobile (aparece a partir de tablet)
//              'desktop' = some no desktop
//              null = sempre visível
// ============================================================

export const characters = {
  // ---------- HERO (topo do site) ----------
  hero: {
    src: '/character/acenando.png',
    width: 'w-44 sm:w-56 lg:w-72',
    // hero não usa posição absolute, fica numa coluna do grid.
    // pra mover o personagem do hero, ajusta width aqui.
    flip: false,
    show: true,
  },

  // ---------- SOBRE ----------
  about: {
    src: '/character/mexendo-pc.png',
    width: 'w-48 xl:w-56',
    position: '-top-32 xl:-top-36 right-0 xl:-right-4',
    flip: false,
    show: true,
    hideOn: 'mobile', // aparece versão mobile centralizada
  },

  // ---------- CAMPOS DE DESENVOLVIMENTO (Areas) ----------
  areas: {
    src: '/character/apontando.png',
    width: 'w-32 lg:w-40',
    position: '-top-8 right-44 lg:right-56',
    flip: true, // aponta pra esquerda
    show: true,
    hideOn: 'mobile',
  },

  // ---------- EXPERIÊNCIA ----------
  experience: {
    src: '/character/sentado-pc.png',
    width: 'w-44 xl:w-52',
    position: '-top-24 xl:-top-28 left-4 xl:left-10',
    flip: false,
    show: true,
    hideOn: 'mobile',
  },

  // ---------- PROJETOS (embaixo dos cards) ----------
  projects: {
    src: '/character/ajustando.png',
    width: 'w-32 md:w-40 lg:w-48',
    // projetos não usa absolute, fica centralizado abaixo dos cards
    flip: false,
    show: true,
  },

  // ---------- CONTATO (em cima do card, apontando pra baixo) ----------
  contact: {
    src: '/character/olhando-por-cima.png',
    width: 'w-40 md:w-48 lg:w-56',
    position: '-top-28 md:-top-32 lg:-top-36 left-1/2 -translate-x-[65%]',
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

  const hideOn =
    c.hideOn === 'mobile' ? 'hidden md:block' :
    c.hideOn === 'desktop' ? 'block md:hidden' :
    '';

  return [
    hideOn,
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]',
    c.width,
    c.position || '',
    extraClasses,
  ].filter(Boolean).join(' ');
}
