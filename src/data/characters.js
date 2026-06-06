// ============================================================
// CONFIG DOS PERSONAGENS
// ============================================================
// Edita posições, tamanhos e poses aqui.
// Salva o arquivo, o site recarrega sozinho no navegador.
//
// >>> AGORA TEM DOIS CONTROLES SEPARADOS: `desktop` e `mobile` <<<
//
//   desktop : posição em telas grandes (computador, monitor, TV)
//   mobile  : posição em telas pequenas (celular)
//
//   Mexer no `desktop` NÃO afeta o mobile.
//   Mexer no `mobile` NÃO afeta o desktop.
//   São totalmente independentes.
//
// --- COMO ESCREVER A POSIÇÃO ---
//
//   top    / -top    → distância do topo (negativo = sobe)
//   left   / -left   → distância da esquerda
//   right  / -right  → distância da direita
//
//   Valores:
//     left-[270px]   → 270 pixels exatos
//     left-[35%]     → 35% da largura (acompanha o tamanho da tela)
//     left-1/2       → bem no meio
//     -translate-x-1/2 → usado junto com left-1/2 pra centralizar
//
//   DICA: no celular (tela estreita), prefira % ou pixels pequenos.
//         Pixel grande tipo left-[700px] some pra fora da tela no celular.
//
// --- OUTROS CAMPOS ---
//   src   : caminho da imagem (/character/...)
//   width : tamanho. Ex 'w-48', 'w-56', 'w-[200px]'
//   flip  : true espelha horizontalmente
//   show  : false esconde o personagem
//   hideOnMobile : true esconde SÓ no celular
// ============================================================

export const characters = {
  // ---------- HERO (topo do site) ----------
  // Hero fica numa coluna do grid (não usa desktop/mobile). Só ajusta o width.
  hero: {
    src: '/character/acenando.png',
    width: 'w-72',
    flip: false,
    show: true,
  },

  // ---------- SOBRE ----------
  about: {
    src: '/character/mexendo-pc.png',
    width: 'w-56',
    desktop: '-top-36 -right-2',
    mobile: '-top-[660px] right-[-30px]',
    flip: false,
    show: true,
  },

  // ---------- CAMPOS DE DESENVOLVIMENTO (Areas) ----------
  areas: {
    src: '/character/apontando.png',
    width: 'w-[260px]',
    desktop: '-top-[10px] left-[700px]',
    mobile: '-top-[-120px] left-[55%]',
    flip: true, // aponta pra esquerda
    show: true,
  },

  // ---------- EXPERIÊNCIA ----------
  experience: {
    src: '/character/sentado-pc.png',
    width: 'w-52',
    desktop: '-top-[264px] left-[550px]',
    mobile: '-top-[360px] left-[25%]',
    flip: false,
    show: true,
  },

  // ---------- PROJETOS (embaixo dos cards) ----------
  projects: {
    src: '/character/ajustando.png',
    width: 'w-48',
    desktop: 'top-[-80px] left-[300px] -translate-x-1/2',
    mobile: 'top-[-50px] left-[20px]',
    flip: false,
    show: true,
  },

  // ---------- CONTATO (em cima do card, apontando pra baixo) ----------
  contact: {
    src: '/character/olhando-por-cima.png',
    width: 'w-56',
    desktop: '-top-36 left-[260px]',
    mobile: '-top-36 left-[50px]',
    flip: false,
    show: true,
  },
};

// ============================================================
// HELPER (não precisa editar)
// Aplica `mobile` como base e `desktop` a partir de telas grandes (lg:).
// ============================================================
function toDesktop(classStr) {
  return (classStr || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((cls) => `md:${cls}`)
    .join(' ');
}

export function characterClass(key, extraClasses = '') {
  const c = characters[key];
  if (!c || !c.show) return '';

  // suporta tanto o formato novo (desktop/mobile) quanto o antigo (position)
  const pos = (c.desktop || c.mobile)
    ? `${c.mobile || ''} ${toDesktop(c.desktop || '')}`
    : (c.position || '');

  return [
    'absolute pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]',
    c.hideOnMobile ? 'hidden md:block' : '',
    c.width,
    pos,
    extraClasses,
  ].filter(Boolean).join(' ');
}
