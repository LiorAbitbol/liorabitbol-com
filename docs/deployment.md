# Deployment Runbook

This site is an Astro static site for `liorabitbol.com`. The production build is generated into `dist/` and can be deployed by any static hosting provider.

## Prerequisites

- Node.js `>=22.12.0`
- Dependencies installed with `npm.cmd install`
- A static hosting target connected to `liorabitbol.com`
- DNS access for `liorabitbol.com`

PowerShell may block `npm.ps1`, so use `npm.cmd` in the commands below.

## Local Validation

From the repository root:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

The build should complete successfully and generate the production site in `dist/`.

To inspect the production build locally:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run preview
```

Open the local preview URL printed by Astro and check:

- Homepage: `/`
- Resume: `/resume`
- Projects index section on the homepage
- Project detail pages under `/projects/...`
- Blog index: `/blog`
- Blog post: `/blog/terraform-modules-are-an-operating-model`

## Commit and Push

Review changed files:

```powershell
git status
git diff
```

Commit the changes:

```powershell
git add .
git commit -m "Update website content"
```

Push to the repository branch used by the hosting provider:

```powershell
git push
```

## Hosting Setup

Configure the hosting provider as a static Astro site.

Recommended build settings:

- Build command: `npm.cmd run build`
- Output directory: `dist`
- Node version: `>=22.12.0`
- Production URL: `https://liorabitbol.com`

If the host uses Linux commands instead of Windows commands, use:

```bash
npm run build
```

The Astro config already sets:

```js
site: 'https://liorabitbol.com'
```

## DNS

Point `liorabitbol.com` at the hosting provider according to that provider's instructions.

Common patterns:

- Apex domain, `liorabitbol.com`: `A` records or provider-specific `ALIAS` / `ANAME`
- `www.liorabitbol.com`: `CNAME` to the host-provided target

Choose one canonical domain and redirect the other to it. The current site is configured around:

```text
https://liorabitbol.com
```

## Post-Deploy Checks

After deployment completes, verify:

- `https://liorabitbol.com/`
- `https://liorabitbol.com/resume`
- `https://liorabitbol.com/blog`
- `https://liorabitbol.com/blog/terraform-modules-are-an-operating-model`
- `https://liorabitbol.com/projects/policy-mesh`
- `https://liorabitbol.com/projects/stacklayer`

Also check:

- The favicon loads.
- Navigation links work.
- External GitHub and LinkedIn links work.
- Email links open `lior@liorabitbol.com`.
- The site is served over HTTPS.

## Future Blog Subdomain

If `blog.liorabitbol.com` is needed later, prefer handling it through hosting and DNS unless the blog becomes a separate deployment.
