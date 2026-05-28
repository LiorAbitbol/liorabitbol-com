# Deployment Runbook

This site is deployed through Cloudflare Pages from the Git repository. A push to the production branch triggers Cloudflare to build and publish the site.

## Normal Publish Flow

From the repository root:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
git status
git diff
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages automatically deploys after the pushed commit lands on the production branch.

## Cloudflare Build Settings

These settings should already be configured in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Production branch: `main`
- Environment variable: `NODE_VERSION=22.12.0`

Cloudflare builds on Linux, so the Cloudflare build command uses `npm run build`. Local PowerShell examples use `npm.cmd` because PowerShell may block `npm.ps1`.

## Post-Deploy Checks

After Cloudflare finishes deploying, verify:

- `https://liorabitbol.com/`
- `https://liorabitbol.com/resume`
- `https://liorabitbol.com/blog`
- `https://liorabitbol.com/blog/terraform-modules-are-an-operating-model`
- `https://liorabitbol.com/projects/policy-mesh`
- `https://liorabitbol.com/projects/stacklayer`

Also check that navigation, favicon, GitHub, LinkedIn, and email links work.

## Rollback

If a deployment breaks the site:

1. Open the Cloudflare Pages project.
2. Go to **Deployments**.
3. Select the previous working deployment.
4. Roll back or promote the previous deployment.

Then fix the issue locally, run the build, commit, and push again.
