# Pedro Felipe — Portfólio Pessoal

Site one-page premium: currículo visual e portfólio de Pedro Felipe Costa Mesquita.

Stack: **Vite + React + Tailwind CSS + Framer Motion + lucide-react**.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  App.jsx                  # composição das seções
  main.jsx                 # entrada React
  index.css                # estilos base, utilitários e tokens (Tailwind)
  data/
    profile.js             # ⭐ todos os textos, experiências, projetos, cursos, skills
  hooks/
    useTheme.js            # modo claro/escuro (persistido no localStorage)
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Areas.jsx
    Experience.jsx
    ExperienceCard.jsx
    Projects.jsx
    ProjectCard.jsx
    Education.jsx
    Skills.jsx
    Contact.jsx
    SectionTitle.jsx
    ThemeToggle.jsx
public/
  favicon.svg              # monograma PF
index.html                 # meta tags, SEO, Open Graph, fontes
tailwind.config.js         # paleta (ink/mist/accent), animações, fontes
```

## Onde editar o quê

Quase tudo está em **`src/data/profile.js`**:

| O que trocar              | Onde                                    |
| ------------------------- | --------------------------------------- |
| Nome, tagline, telefone   | `profile`                               |
| Texto da seção "Sobre"    | `about.paragraphs` / `about.highlights` |
| Cards de áreas            | `areas`                                 |
| Experiências profissionais| `experiences`                           |
| Projetos                  | `projects` (adicionar `media` quando tiver imagem/vídeo) |
| Formação                  | `education`                             |
| Cursos                    | `courses`                               |
| Competências              | `skills`                                |
| Links do menu             | `nav`                                   |

### Adicionar imagem ou vídeo a um projeto

Coloque o arquivo em `public/` (ex.: `public/projects/projeto-1.jpg`) e edite o item em `projects`:

```js
{
  name: 'Projeto de IA Criativa',
  // ...
  media: '/projects/projeto-1.jpg', // ou '/projects/demo.mp4'
}
```

O `ProjectCard` detecta `.mp4`/`.webm` automaticamente e renderiza como vídeo (`autoplay muted loop`).

### Trocar SEO e título da aba

Edite as meta tags em **`index.html`** (`<title>`, `description`, Open Graph, `theme-color`).

### Trocar paleta / acentos visuais

Edite **`tailwind.config.js`** — `colors.ink`, `colors.mist`, `colors.accent`.

## Modo claro / escuro

- Padrão: **escuro**.
- Toggle: ícone sol/lua no header.
- Preferência salva em `localStorage` sob a chave `pf-theme`.

## Internacionalização (futuro)

Toda a copy está centralizada em `src/data/profile.js`. Para adicionar inglês:

1. Crie `src/data/profile.en.js` espelhando a mesma estrutura.
2. Crie um hook simples (ex.: `useLocale`) para escolher qual objeto importar.
3. Substitua os `import { ... } from '../data/profile.js'` por uma camada que retorne o locale ativo.

A estrutura já está pronta para isso — nenhum texto está hard-coded dentro dos componentes.

## Acessibilidade

- HTML semântico (`header`, `main`, `section`, `article`, `nav`, `footer`).
- Botões com `aria-label`.
- Bom contraste em ambos os modos.
- Navegação por âncoras e por teclado.

## Deploy

Site 100% estático após `npm run build` — pode ser publicado em Vercel, Netlify, Cloudflare Pages ou GitHub Pages sem ajustes.
