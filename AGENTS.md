# Project Handoff Notes

This is the Astro project for `liorabitbol.com`, a personal professional website for Lior Abitbol.

## Project Goal

- Main site at `/` for professional/career positioning.
- Resume page at `/resume`.
- Projects section with dedicated project pages under `/projects/[slug]`.
- Blog index at `/blog`, with posts under `/blog/...`.
- A future `blog.liorabitbol.com` should be handled through hosting/DNS unless the blog becomes a separate deployment.

## Tech Stack

- Astro, minimal template.
- Plain Astro pages and scoped CSS.
- Shared layout: `src/layouts/BaseLayout.astro`.
- Project data lives in `src/data/projects.ts`.
- No UI framework, component library, or Tailwind currently in use.

## Commands

PowerShell may block `npm.ps1`, so prefer `npm.cmd`.

Build:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

Run dev server:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --host 127.0.0.1 --port 4321
```

Always run the build before considering work complete.

## Site Structure

- `src/pages/index.astro`
  - Homepage hero
  - Projects section
  - Resume teaser section
  - Blog teaser section
- `src/pages/resume.astro`
  - Resume hero/contact
  - Core Capabilities
  - Professional Experience
  - Education
  - Contact CTA
- `src/data/projects.ts`
  - Source of truth for project cards and project detail pages.
- `src/pages/projects/[slug].astro`
  - Dynamic project page template.
  - Supports richer fields for `overviewDetails`, `problemDetails`, `approach`, `approachPoints`, `approachNote`, `keyCapabilities`, `currentState`, and `whyItMatters`.
- `src/pages/blog/index.astro`
  - Blog index.
- `src/pages/blog/terraform-modules-are-an-operating-model.astro`
  - First blog post.
- `public/favicon.svg`
  - Custom LA favicon.

## Design Direction

- Clean, professional, calm, engineering-focused.
- Avoid marketing fluff and oversized hero typography.
- No decorative icons in the global header/footer.
- Resume contact icons are acceptable, but must remain small and restrained.
- Cards use small radius, around `8px`.
- Section labels use the shared `.section-kicker` style in `BaseLayout.astro`; avoid page-specific overrides unless there is a clear reason.
- Prefer consistent heading scale across pages.
- Avoid one-note color palettes and heavy gradients. Current palette uses ink, paper, teal accent, clay, and gold.
- Project pages should use `← Back to projects` as the back link.

## Current Homepage Copy Direction

Hero:

- H1: `Lior Abitbol builds platform systems, developer workflows, and technical strategy.`
- Intro focuses on platform systems, developer workflows, governance models, speed, standards, and operational control.
- Three focus cards:
  - Engineering systems
  - Technical leadership
  - Writing in public

Projects section:

- Heading: `Platform systems spanning AI, developer experience, and infrastructure.`
- Copy: projects are built around governance, reproducibility, and developer workflows, designed as platform capabilities, not standalone tools.

Resume section:

- Heading: `Platform engineering and developer experience, grounded in infrastructure and automation.`
- Summary should reflect the actual resume: Staff/Principal-level platform work, internal developer tooling, governance-as-code, AWS automation, and enterprise infrastructure in regulated environments.
- Open design note: the `View resume` button may be better placed under the heading on the left, similar to the hero/blog action placement.

Blog section:

- Writing about platform engineering, developer experience, AI-enabled systems, governance-as-code, infrastructure standards, developer workflows, and operating models.

## Project Pages

Current projects:

- Policy Mesh
  - Status: Active
  - AI governance/control plane.
  - Important wording: do not frame as strictly "local-first"; routing is configurable by user/policy.
  - Summary: deterministic AI control plane for auditable model routing across local and cloud providers.
- StackLayer
  - Status: Active
  - Reproducible Kubernetes platform environment for validating infrastructure, GitOps, and observability patterns.
- Linktuate
  - Status: In progress
  - Website validation tool for structured analysis of site health and trust signals.
- TerraLens
  - Status: Coming soon
  - Terraform analysis tool for surfacing infrastructure risk before deployment.

Project detail pages should tell a platform story:

- What it is
- Problem
- Approach
- Key Capabilities or Planned Capabilities
- Current State when applicable
- Why it matters
- Technology
- Links when available

## Resume Direction

Positioning:

- Staff/Principal Platform Engineer focused on developer experience, internal platforms, and AI-enabled engineering systems.
- Builds and leads platform capabilities that help teams ship faster through clear standards, automation, and governance-as-code.

Core capabilities:

- Platform Engineering & Internal Developer Platforms
- Developer Experience (DevEx) & Tooling
- Governance-as-Code & Policy Enforcement
- Cloud & Automation (AWS)
- AI-Augmented Engineering Systems
- Technical Leadership & Cross-Team Influence

Experience titles currently used:

- Independent Platform, DevEx, and AI Engineer
- Senior Technical Lead (Principal Engineering), Freddie Mac
- Platform Automation Director, Freddie Mac
- Senior Platform Automation Lead, CIT Bank
- Senior Infrastructure Engineer, CIT Bank
- Earlier Infrastructure and Systems Engineering Roles, Humble Monkey and Lord Abbett

Education is intentionally simple and left-aligned. Certifications are intentionally omitted for now.

Resume contact card should only include:

- `lior@liorabitbol.com`
- GitHub
- LinkedIn

## Blog

Current post:

- `Terraform Modules Are an Operating Model`
- Date: February 10, 2026
- Main idea: Terraform module strategy is an operating model, not just a folder structure.
- Repository reference: `https://github.com/liorabitbol/terraform-modules-strategy`

The original "what this blog is for" post was removed from source. If old files appear in `dist`, they are generated/stale output, not source content.

## Links

- Email: `lior@liorabitbol.com`
- GitHub: `https://github.com/LiorAbitbol/`
- LinkedIn: `https://www.linkedin.com/in/liorabitbol/`

Project links:

- Policy Mesh repo: `https://github.com/liorabitbol/policy-mesh`
- Policy Mesh architecture: `https://github.com/liorabitbol/policy-mesh/blob/main/docs/architecture.md`
- Policy Mesh getting started: `https://github.com/liorabitbol/policy-mesh/blob/main/docs/getting_started.md`
- StackLayer repo: `https://github.com/liorabitbol/stacklayer`
- StackLayer architecture: `https://github.com/liorabitbol/stacklayer/blob/main/docs/architecture.md`
- StackLayer prerequisites: `https://github.com/liorabitbol/stacklayer/blob/main/docs/prerequisites.md`
- StackLayer tutorials: `https://github.com/liorabitbol/stacklayer/tree/main/docs/tutorials`

## Collaboration Preferences

- User prefers iterative, concise changes and visual review.
- Make actual edits when requested; do not stop at suggestions unless the user is asking for advice.
- Keep copy sharp, professional, and specific to platform engineering, DevEx, AI systems, governance, automation, and infrastructure.
- Avoid overexplaining in final responses; mention what changed and whether the build passed.
