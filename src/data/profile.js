// Central place to edit copy, experiences, projects, etc.
// Para evoluir o site no futuro, ajuste apenas este arquivo.

export const profile = {
  shortName: 'Pedro Felipe',
  fullName: 'Pedro Felipe Costa Mesquita',
  tagline: 'Administração, Processos & Inovação Digital',
  heroSupport:
    'Estudo Administração na UFES e ando me dividindo entre rotinas de escritório, processos e projetos digitais que faço por conta.',
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
  eyebrow: 'Sobre',
  title: 'Oi, eu sou o Pedro.',
  paragraphs: [
    'Tô no curso de Administração na UFES e venho cruzando duas frentes que pra mim conversam o tempo todo: a parte mais técnica — rotinas de escritório, documentação, viabilidade, finanças — e a parte mais criativa, onde uso IA pra prototipar, organizar ideias e tirar projetos do papel.',
    'Gosto de processo limpo. Gosto de entregar coisa que faça sentido. E gosto de aprender rápido — não no sentido de tutorial assistido em 2x, mas no sentido de pegar uma ferramenta nova, quebrar ela, e descobrir onde ela encaixa no meu trabalho.',
    'Esse portfólio é meu jeito de mostrar o que eu venho fazendo: trabalho formal, projetos pessoais, ferramentas que crio pra mim mesmo. Tudo o que tá aqui é real e tá em movimento.',
  ],
  highlights: [
    { label: 'Formação', value: 'Administração · UFES' },
    { label: 'Onde', value: 'Vila Velha — ES' },
    { label: 'Status', value: 'Aberto a oportunidades' },
  ],
};

export const areas = [
  {
    title: 'Administração & Processos',
    description:
      'É a base. Documentação, controle de prazos, organização — onde aprendi que processo bom é o que ninguém percebe que existe.',
  },
  {
    title: 'IA Criativa',
    description:
      'Uso IA todo dia, mas não como muleta. Pra prototipar interface, organizar pesquisa, gerar referência visual e acelerar ideia.',
  },
  {
    title: 'Design & Comunicação Visual',
    description:
      'Curto coisa bem feita. Tipografia certa, hierarquia que respira, materiais que comunicam antes de ler.',
  },
  {
    title: 'Automações',
    description:
      'Se tô repetindo a mesma tarefa três vezes, já tô pensando em como ela pode rodar sozinha.',
  },
  {
    title: 'Projetos Pessoais',
    description:
      'Quase tudo que aprendo, eu testo num projeto meu. É como eu seguro o conhecimento — fazendo.',
  },
  {
    title: 'Ferramentas Próprias',
    description:
      'Quando uma ferramenta pronta não resolve, eu monto a minha. Quase sempre simples, sempre prática.',
  },
];

export const experiences = [
  {
    company: 'Mocelin Engenharia LTDA',
    role: 'Estagiário — Desenvolvimento Imobiliário',
    period: 'Ago 2024 — Nov 2025',
    location: 'Vitória — ES',
    summary:
      'Trabalhei na área de desenvolvimento imobiliário, ajudando em cálculos de viabilidade de terrenos, controle de notas fiscais, organização de documentos internos e preparação de pautas pra reuniões. Foi onde aprendi a tratar dado financeiro com cuidado e a montar material que outras pessoas vão usar pra decidir.',
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
      'Meu primeiro estágio. Apoio em rotinas administrativas e financeiras: planilha, prazo, documento, demanda interna. Foi aqui que peguei o ritmo de escritório e entendi a diferença que um bom controle faz no dia a dia de quem tá rodando o negócio.',
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
      'Estúdio criativo que tô construindo: identidade, sites e materiais visuais — IA como direção, não como muleta.',
    tags: ['IA Criativa', 'Direção Visual', 'Sites', 'Identidade', 'Ferramentas'],
    longDescription:
      'A LIOST nasceu de uma frustração simples: vi muita marca pequena travada porque "agência é caro" e "fazer sozinho fica feio". Resolvi montar um estúdio que usa IA como ferramenta de direção e prototipagem, mas com acabamento humano, sem aquele cheiro de IA genérica. A ideia é entregar imagem, vídeo, identidade, sites e pequenas ferramentas em prazo curto, sem perder coerência visual.',
    objective:
      'Provar que dá pra ter presença digital profissional sem precisar de uma estrutura de agência tradicional — usando IA pra ganhar velocidade e mantendo critério humano pra ganhar qualidade.',
    demonstrates: [
      'Visão de marca',
      'Direção criativa',
      'Uso estratégico de IA',
      'Construção de identidade',
      'Estruturação de oferta',
      'Pensamento comercial',
    ],
    media: null,
    mediaPlaceholder: 'brand',
    mediaNote: 'Visual conceitual',
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
      'App que tô fazendo pra organizar minha rotina — diária, semanal, mensal. Cabeça menos cheia, foco no que importa.',
    tags: ['Produto Digital', 'Organização', 'Rotina', 'UX', 'Foco'],
    longDescription:
      'O Plannit começou como uma necessidade minha. Eu tava perdendo tempo demais decidindo o que fazer em vez de simplesmente fazer. Construí um app que separa tarefas em três níveis (foco principal, médias, pequenas), gerencia checklist diário e mostra o que vem nas próximas 24h. A interface é minimalista de propósito — quanto menos a ferramenta puxa atenção, mais sobra pro trabalho.',
    objective:
      'Reduzir o atrito entre "decidir o que fazer" e "fazer". Transformar planejamento numa coisa rápida, visual, e que não vira mais uma tarefa.',
    demonstrates: [
      'Pensamento de produto',
      'Prototipagem de interface',
      'Noção de UX',
      'Resolver problema próprio em sistema',
      'Disciplina pra terminar',
    ],
    media: null,
    mediaPlaceholder: 'app',
    mediaNote: 'Visual conceitual',
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
      'Agentes que montei no Claude pra cuidar de finanças, rotina e decisões — IA com contexto, não com respostas soltas.',
    tags: ['IA Aplicada', 'Organização Pessoal', 'Finanças', 'Planejamento', 'Manuais'],
    longDescription:
      'Em vez de abrir o Claude e perguntar coisa solta toda vez, montei um conjunto de agentes com manuais, regras e arquivos próprios — cada um responsável por uma frente da minha vida: finanças, rotina, planejamento, decisões. Eles têm memória, sabem o meu contexto, e me ajudam a manter consistência em vez de só responder pergunta. É a parte mais útil que descobri usando IA até agora.',
    objective:
      'Transformar IA num apoio operacional de verdade. Reduzir ruído, manter contexto, e usar inteligência artificial como camada de organização pessoal — não como assistente de pergunta avulsa.',
    demonstrates: [
      'Uso avançado de IA no dia a dia',
      'Criação de manuais operacionais',
      'Organização financeira pessoal',
      'Pensamento sistêmico',
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
    period: 'Cursando · 2028/1',
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
  'Informática Avançada — Word, Excel, PowerPoint',
  'Inglês — básico/intermediário',
  'Liderança para Jovens',
  'Anthropic / Claude IA',
  'Microsoft Learn',
];

export const skills = [
  'Organização',
  'Planejamento',
  'Pontualidade',
  'Flexibilidade',
  'Trabalho em equipe',
  'Aprende rápido',
  'Sistemas informatizados',
  'Cálculo',
  'Documentação',
  'Comunicação interna',
  'Disciplina',
  'Sempre em evolução',
];

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
];
