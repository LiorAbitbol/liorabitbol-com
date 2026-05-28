# liorabitbol.com

Personal professional website for Lior Abitbol, built with Astro.

The site presents platform engineering work, developer experience projects, a resume, and blog writing around infrastructure operating models, AI-enabled engineering systems, governance-as-code, and internal platforms.

## Site Sections

- `/` - Homepage with professional positioning, projects, resume summary, and blog preview.
- `/resume` - Resume page covering platform engineering, DevEx, AWS automation, governance-as-code, enterprise infrastructure, and technical leadership.
- `/projects/[slug]` - Dedicated project pages generated from shared project data.
- `/blog` - Blog index.
- `/blog/terraform-modules-are-an-operating-model` - First blog post.

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── resume.astro
│       ├── blog/
│       │   ├── index.astro
│       │   └── terraform-modules-are-an-operating-model.astro
│       └── projects/
│           └── [slug].astro
├── AGENTS.md
├── package.json
└── README.md
```

## Content Notes

Project cards and project detail pages are driven from `src/data/projects.ts`.

Current projects:

- Policy Mesh - deterministic AI control plane for auditable model routing.
- StackLayer - reproducible Kubernetes platform lab.
- Linktuate - website validation tool, in progress.
- TerraLens - Terraform analysis tool, coming soon.

The shared page shell, global styles, navigation, footer, and core design tokens live in `src/layouts/BaseLayout.astro`.

## Development

Requires Node.js `>=22.12.0`.

Install dependencies:

```powershell
npm.cmd install
```

Start the dev server:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --host 127.0.0.1 --port 4321
```

Build the site:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

Preview the production build:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run preview
```

PowerShell may block `npm.ps1`, so `npm.cmd` is used in the examples.

## Working Notes

- Keep the site simple: Astro pages, shared data, and plain CSS.
- Run `npm.cmd run build` before considering changes complete.
- Prefer project-specific content in `src/data/projects.ts` instead of hardcoding individual project pages.
- Keep copy focused on platform engineering, developer experience, AI systems, governance, automation, and infrastructure.
- `AGENTS.md` contains a fuller project handoff for future coding sessions.
