# Stylish Portfolio

A lightweight, responsive portfolio built with Vite + React (JSX) and Tailwind CSS. Uses plain CSS files for component styles and includes scroll reveal animations via custom hooks.

## Pages / Sections

- Home (Hero) — Intro, call-to-action and key links.
- About — Short bio, skills and experience.
- Projects — Featured project cards on the home page.
- Full Projects — Dedicated page listing all projects (src/pages/FullProjectsPage.jsx).
- Contact — Contact details / simple contact UI.
- Shared components: Header, Footer, MainLayout and reusable UI pieces.

## Features

- Vite + React (JSX) starter
- Tailwind CSS + plain CSS stylesheets
- Scroll reveal / entrance animations (useScrollAnimation.js / useScrollReveal.js)
- Responsive layout (mobile → desktop)
- Project cards with links and images
- Simple, easy-to-customize structure

## Project Structure (actual, trimmed)

```
stylish-portfolio
├── index.html
├── package.json
├── public
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── images
│   │   ├── profile.jpeg
│   │   ├── sitecoreImg.jpeg
│   │   └── ...other images
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   └── Contact.jsx
│   ├── pages
│   │   └── FullProjectsPage.jsx
│   ├── layouts
│   │   ├── MainLayout.jsx
│   │   └── MainLayout.css
│   ├── hooks
│   │   ├── useScrollAnimation.js
│   │   └── useScrollReveal.js
│   ├── styles
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── fullprojects.css
│   └── utils
└── vite.config.js
```

Files/folders like .git, node_modules and macOS .DS_Store are excluded from the list above.

## Quick Start

From the project root:

1. Install dependencies
   ```bash
   npm install
   ```

2. Run dev server
   ```bash
   npm run dev
   ```
   Open the URL printed by Vite (commonly http://localhost:5173).

3. Build / preview
   ```bash
   npm run build
   npm run preview
   ```

## Where to edit

- Content & layout: src/components (Hero.jsx, About.jsx, Projects.jsx, Contact.jsx)
- All projects page: src/pages/FullProjectsPage.jsx
- Layout wrapper: src/layouts/MainLayout.jsx
- Styles: src/styles/*.css and component CSS files under src/components
- Images: src/images
- Scroll animations: src/hooks/useScrollAnimation.js and src/hooks/useScrollReveal.js

## Scripts

- npm run dev — start Vite dev server
- npm run build — create production build
- npm run preview — preview production build

(Use package.json for any additional scripts.)

## Contributing

Small fixes and improvements welcome. Open a PR with a brief description and the changed files.

## License

MIT — see LICENSE file (if present).

## Contact

Update src/components/Contact.jsx with your preferred email, links, or form endpoint.