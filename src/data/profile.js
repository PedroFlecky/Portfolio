// Central place to edit copy, experiences, projects, etc.
// Para evoluir o site no futuro, ajuste apenas este arquivo.

export const profile = {
  shortName: 'Pedro Felipe',
  fullName: 'Pedro Felipe Costa Mesquita',
  tagline: 'Administração, Processos & Inovação Digital',
  heroSupport:
    'Estudante de Administração com foco em processos, IA criativa e construção de soluções digitais.',
  location: 'Vila Velha — ES, Brasil',
  email: 'pp347023@gmail.com',
  whatsapp: {
    raw: '5591991652478',
    display: '(91) 9 9165-2478',
    url: 'https://wa.me/5591991652478',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/pedro-felipe-819772315/',
    handle: 'pedro-felipe',
  },
  markers: ['Administração', 'IA Criativa', 'Processos', 'Projetos Digitais'],
};

export const about = {
  eyebrow: 'Perfil',
  title: 'Em formação, com base prática e visão moderna.',
  paragraphs: [
    'Estou construindo minha trajetória na interseção entre administração, organização de processos e criatividade digital. Curso Administração na Universidade Federal do Espírito Santo e venho desenvolvendo experiência prática em rotinas administrativas, financeiras e desenvolvimento imobiliário.',
    'Meu foco está em aprender com consistência, organizar informações com clareza e explorar soluções digitais que tornem processos mais simples, visuais e eficientes.',
    'Cada projeto pessoal funciona como um exercício de método: transformar uma ideia ou necessidade em estrutura, e estrutura em entrega.',
  ],
  highlights: [
    { label: 'Formação', value: 'Bacharelado em Administração — UFES' },
    { label: 'Localização', value: 'Vila Velha — ES' },
    { label: 'Disponibilidade', value: 'Aberto a oportunidades' },
  ],
};

export const areas = [
  {
    title: 'Administração & Processos',
    description:
      'Organização de rotinas, documentação e controle de prazos como base do meu repertório profissional.',
  },
  {
    title: 'IA Criativa',
    description:
      'Estudo contínuo de ferramentas de inteligência artificial aplicadas à criação, pesquisa e prototipagem.',
  },
  {
    title: 'Design & Comunicação Visual',
    description:
      'Interesse por estética, hierarquia e construção de materiais claros, modernos e funcionais.',
  },
  {
    title: 'Automações',
    description:
      'Curiosidade por fluxos mais simples e escaláveis para tarefas repetitivas e organização de informações.',
  },
  {
    title: 'Projetos Pessoais',
    description:
      'Ideias próprias colocadas em prática como forma de aprendizado, experimentação e evolução.',
  },
  {
    title: 'Ferramentas Próprias',
    description:
      'Pequenas ferramentas digitais para resolver necessidades reais do dia a dia.',
  },
];

export const experiences = [
  {
    company: 'Mocelin Engenharia LTDA',
    role: 'Estagiário — Desenvolvimento Imobiliário',
    period: 'Ago 2024 — Nov 2025',
    location: 'Vitória — ES',
    summary:
      'Atuação em desenvolvimento imobiliário, com apoio em cálculos de viabilidade de terrenos, organização documental, registro de notas fiscais e preparação de informações para reuniões.',
    bullets: [
      'Viabilidade de terrenos',
      'Documentação interna',
      'Notas fiscais',
      'Organização de informações',
      'Pautas para reuniões',
    ],
  },
  {
    company: 'Cookie do Nicão LTDA',
    role: 'Estagiário — Auxiliar Administrativo e Financeiro',
    period: 'Jul 2023 — Jul 2024',
    location: 'Vila Velha — ES',
    summary:
      'Atuação em rotinas administrativas e financeiras, apoio à organização interna, controle de prazos, elaboração de documentos e suporte a demandas internas com foco em eficiência e cordialidade.',
    bullets: [
      'Rotinas administrativas e financeiras',
      'Organização documental',
      'Word e Excel',
      'Controle de prazos',
      'Suporte interno',
    ],
  },
];

export const projects = [
  {
    id: 'liost',
    name: 'LIOST',
    category: 'Estúdio Criativo com IA',
    status: 'Projeto autoral',
    shortDescription:
      'Estúdio criativo em desenvolvimento para imagem, vídeo, identidade, sites e ferramentas com IA.',
    tags: ['IA Criativa', 'Direção Visual', 'Sites', 'Identidade', 'Ferramentas'],
    longDescription:
      'A LIOST é um projeto autoral de estúdio criativo com inteligência artificial, criado para unir direção visual, tecnologia e soluções digitais em uma estrutura clara e profissional. O projeto explora criação de imagens, vídeos, identidade visual, sites e ferramentas, sempre com foco em estética coerente, processo direto e acabamento humano.',
    objective:
      'Construir uma marca criativa capaz de transformar ideias em presença digital, usando IA como ferramenta de direção, prototipagem e execução.',
    demonstrates: [
      'Visão de marca',
      'Direção criativa',
      'Uso estratégico de IA',
      'Construção de identidade visual',
      'Estruturação de oferta',
      'Pensamento comercial e digital',
    ],
    media: null,
    mediaPlaceholder: 'brand',
    mediaNote: 'Visual conceitual',
    // 👇 Prints reais usados APENAS dentro do modal.
    // Coloque os arquivos em /public/assets/projects/ e mantenha estes paths.
    // Para adicionar mais prints, coloque o arquivo em /public/assets/projects/
    // e acrescente um objeto { src, alt } ao array abaixo.
    gallery: [
      { src: '/assets/projects/liost-01.png', alt: 'LIOST — Home do site' },
    ],
  },
  {
    id: 'plannit',
    name: 'Plannit',
    category: 'Organização Pessoal · Produto Digital',
    status: 'Protótipo em desenvolvimento',
    shortDescription:
      'App pessoal para organizar rotina diária, semanal e mensal com foco, clareza e prioridades.',
    tags: ['Produto Digital', 'Organização', 'Rotina', 'UX', 'Foco'],
    longDescription:
      'O Plannit é um aplicativo pessoal de organização criado para estruturar tarefas, lembretes, compromissos e prioridades em diferentes níveis de rotina: diária, semanal e mensal. A ideia surgiu da necessidade de manter clareza sobre o que precisa ser feito, evitar perda de foco e transformar planejamento em uma experiência visual simples e funcional.',
    objective:
      'Criar uma ferramenta prática para apoiar disciplina, foco e acompanhamento de tarefas, reduzindo confusão mental e facilitando a organização do dia a dia.',
    demonstrates: [
      'Pensamento de produto',
      'Organização de rotina',
      'Prototipagem de interface',
      'Noção de experiência do usuário',
      'Criação de ferramenta própria',
      'Capacidade de transformar uma necessidade pessoal em sistema',
    ],
    media: null,
    mediaPlaceholder: 'app',
    mediaNote: 'Visual conceitual',
    // 👇 Print real do app usado APENAS dentro do modal.
    gallery: [
      { src: '/assets/projects/plannit-01.png', alt: 'Plannit — Tela Hoje' },
    ],
  },
  {
    id: 'agentes-ia',
    name: 'Agentes de IA para Organização Pessoal',
    category: 'IA Aplicada · Organização · Automação',
    status: 'Sistema pessoal em evolução',
    shortDescription:
      'Estruturas no Claude para organizar finanças, rotina, decisões e informações recorrentes.',
    tags: ['IA Aplicada', 'Organização Pessoal', 'Finanças', 'Planejamento', 'Manuais'],
    longDescription:
      'Este projeto reúne agentes, arquivos e manuais criados no Claude para apoiar a organização pessoal e financeira. Em vez de usar IA apenas para respostas soltas, a proposta é construir sistemas com contexto, regras e estrutura própria, capazes de auxiliar no acompanhamento de rotinas, decisões, planejamento financeiro e gestão de informações importantes.',
    objective:
      'Usar inteligência artificial como uma camada de apoio para organizar informações, reduzir ruído, manter clareza de prioridades e transformar processos pessoais em fluxos mais consistentes.',
    demonstrates: [
      'Uso avançado de IA no cotidiano',
      'Criação de manuais e estruturas operacionais',
      'Organização financeira e pessoal',
      'Pensamento sistêmico',
      'Automação cognitiva',
      'Documentação de processos',
    ],
    media: null,
    mediaPlaceholder: 'concept',
    mediaNote: 'Visual conceitual',
    conceptModules: ['Finanças', 'Rotina', 'Planejamento', 'Decisões', 'Arquivos', 'Manuais'],
  },
];

export const education = [
  {
    degree: 'Bacharelado em Administração',
    institution: 'Universidade Federal do Espírito Santo — UFES',
    period: 'Cursando — previsão 2028/1',
    location: 'Vitória — ES',
  },
  {
    degree: 'Ensino Médio',
    institution: 'Sistema de Ensino Amazônia',
    period: 'Concluído em 2022',
    location: 'Ananindeua — PA',
  },
];

export const courses = [
  'Informática Avançada — Word, Excel, PowerPoint e digitação',
  'Inglês — básico/intermediário',
  'Liderança para Jovens — Autoconhecimento, Desenvolvimento Social e Gestão',
  'Anthropic / Claude IA',
  'Microsoft Learn',
];

export const skills = [
  'Organização',
  'Planejamento',
  'Pontualidade',
  'Flexibilidade',
  'Trabalho em equipe',
  'Aprendizado rápido',
  'Sistemas informatizados',
  'Cálculos',
  'Documentação',
  'Comunicação interna',
  'Disciplina',
  'Desenvolvimento contínuo',
];

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
];
