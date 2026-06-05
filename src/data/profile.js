// Central place to edit copy, experiences, projects, etc.
// Para evoluir o site no futuro, ajuste apenas este arquivo.

export const profile = {
  shortName: 'Pedro Felipe',
  fullName: 'Pedro Felipe Costa Mesquita',
  tagline: 'Administração, Processos & Inovação Digital',
  heroSupport:
    'Estudo Administração na UFES e venho fazendo projetos digitais por conta. Gosto de coisa bem feita e de aprender mexendo.',
  location: 'Vila Velha, ES',
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
    'Tenho 21 anos, sou de Vila Velha, e curso Administração na UFES. Já passei por dois estágios e venho tocando projetos próprios em paralelo, a maioria envolvendo design, IA e organização.',
    'Meu jeito de trabalhar é simples. Pego a coisa, mexo, quebro, vejo onde ela serve. Aprendo melhor fazendo do que assistindo. E quase tudo que eu uso pra estudar acaba virando um projeto pessoal pra fixar.',
    'Esse site é onde eu junto o que tô fazendo agora. Trabalho formal, projetos meus, ferramentas que monto pra organizar minha rotina. Tudo aqui tá em uso.',
  ],
  highlights: [
    { label: 'Formação', value: 'Administração · UFES' },
    { label: 'Onde', value: 'Vila Velha, ES' },
    { label: 'Status', value: 'Aberto a oportunidades' },
  ],
};

export const areas = [
  {
    title: 'Administração & Processos',
    description:
      'De onde eu venho. Documentação, prazo, organização. Quando o processo tá bem feito, ninguém percebe que ele existe.',
  },
  {
    title: 'IA Criativa',
    description:
      'Uso todo dia pra prototipar interface, organizar pesquisa, gerar referência visual e tirar ideia do papel mais rápido.',
  },
  {
    title: 'Design & Comunicação Visual',
    description:
      'Curto coisa bem feita visualmente. Tipografia certa, hierarquia que respira, peça que comunica sem precisar de manual.',
  },
  {
    title: 'Automações',
    description:
      'Se a mesma tarefa apareceu três vezes na minha semana, eu já tô pensando como ela vira fluxo.',
  },
  {
    title: 'Projetos Pessoais',
    description:
      'Praticamente tudo que eu aprendo, eu testo num projeto meu. É assim que o conteúdo gruda na cabeça.',
  },
  {
    title: 'Ferramentas Próprias',
    description:
      'Quando o que existe não me serve, eu monto a minha. Geralmente coisa pequena, sempre funcional.',
  },
];

export const experiences = [
  {
    company: 'Mocelin Engenharia LTDA',
    role: 'Estagiário em Desenvolvimento Imobiliário',
    period: 'Ago 2024 a Nov 2025',
    location: 'Vitória, ES',
    summary:
      'Atuei na área de desenvolvimento imobiliário. Mexi com cálculo de viabilidade de terreno, controle de nota fiscal, organização de documento interno e preparação de pauta pra reunião. Foi onde aprendi a respeitar dado financeiro e a pensar em quem ia ler o que eu produzia.',
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
    role: 'Estagiário Administrativo e Financeiro',
    period: 'Jul 2023 a Jul 2024',
    location: 'Vila Velha, ES',
    summary:
      'Meu primeiro estágio. Cuidei de rotina administrativa e financeira: planilha, prazo, documento, demanda interna. Foi aqui que peguei o ritmo de escritório.',
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
      'Estúdio criativo que tô construindo. Identidade, sites, vídeo e materiais visuais com IA na direção.',
    tags: ['IA Criativa', 'Direção Visual', 'Sites', 'Identidade', 'Ferramentas'],
    longDescription:
      'A LIOST nasceu de uma percepção minha. Vi muita marca pequena que não tem orçamento de agência, mas também não consegue fazer sozinha sem cair no amadorismo. Montei um estúdio que entrega identidade, sites, vídeo e materiais visuais usando IA pra acelerar o processo e mantendo direção humana pro acabamento. A ideia é parecer estúdio sério sem precisar virar agência.',
    objective:
      'Provar que dá pra entregar trabalho criativo profissional com IA na direção e gente no acabamento, sem precisar de estrutura inteira de agência.',
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
      { src: '/assets/projects/liost-01.png', alt: 'LIOST: home do site' },
    ],
  },
  {
    id: 'plannit',
    name: 'Plannit',
    category: 'Organização Pessoal · Produto Digital',
    status: 'Protótipo em desenvolvimento',
    shortDescription:
      'App pessoal pra organizar minha rotina diária, semanal e mensal. Foco no que importa, cabeça menos cheia.',
    tags: ['Produto Digital', 'Organização', 'Rotina', 'UX', 'Foco'],
    longDescription:
      'O Plannit começou porque eu tava perdendo tempo demais decidindo o que fazer antes de fazer. Montei um app que separa as tarefas em três níveis (uma principal, três médias, cinco pequenas), tem checklist diário e mostra o que vem nas próximas 24h. A interface é seca de propósito pra não competir com o que precisa ser feito.',
    objective:
      'Tirar atrito entre planejar e executar. Abrir o app tem que ser rápido e claro, nunca virar mais uma tarefa.',
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
      { src: '/assets/projects/plannit-01.png', alt: 'Plannit: tela Hoje' },
    ],
  },
  {
    id: 'agentes-ia',
    name: 'Agentes de IA para Organização Pessoal',
    category: 'IA Aplicada · Organização · Automação',
    status: 'Sistema pessoal em evolução',
    shortDescription:
      'Agentes que montei no Claude pra cuidar de finanças, rotina, decisão e informação recorrente.',
    tags: ['IA Aplicada', 'Organização Pessoal', 'Finanças', 'Planejamento', 'Manuais'],
    longDescription:
      'Cansei de abrir o Claude e perguntar coisa solta toda hora. Montei um time de agentes com manual, regra e arquivo próprio, cada um cuidando de uma frente da minha vida: finanças, rotina, planejamento, decisão. Eles têm memória, sabem o meu contexto e me ajudam a manter consistência. É o uso de IA que mais me serviu até hoje.',
    objective:
      'Usar IA como apoio operacional de verdade, com contexto e memória. Diminuir ruído, manter clareza, organizar minha vida pessoal num sistema que funciona.',
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
    institution: 'Universidade Federal do Espírito Santo (UFES)',
    period: 'Cursando · previsão 2028/1',
    location: 'Vitória, ES',
  },
  {
    degree: 'Ensino Médio',
    institution: 'Sistema de Ensino Amazônia',
    period: 'Concluído em 2022',
    location: 'Ananindeua, PA',
  },
];

export const courses = [
  'Informática Avançada: Word, Excel, PowerPoint',
  'Inglês: básico e intermediário',
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
