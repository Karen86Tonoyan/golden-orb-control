# Golden Orb Control

> **Experimental Vite/React portfolio and project-information interface**

Golden Orb Control is a TypeScript front-end application built with Vite,
Tailwind and shadcn-style UI components. The visible feature areas are a
landing page, CV, projects, repositories, research, services and manifest
views. `src/lib/github.ts` is the repository's GitHub-related client utility.

## Structure

```text
src/pages/        Index, CV, Projects, Repositories, Research, Services
src/components/   layout, navigation, footer and UI components
src/lib/github.ts GitHub-facing helper
.github/workflows deployment and static-site workflow files
```

## Requirements and local run

```bash
npm ci
npm run dev
```

The project declares commands for production builds, linting and Vitest:

```bash
npm run build
npm run lint
npm run test
```

## Configuration

No documented environment template is included. If a GitHub token or another
service credential becomes necessary, supply it through a local or deployment
secret mechanism rather than committing it to the repository.

## Status

This is an experimental front-end. Its pages and workflow files do not
independently establish a public deployment, GitHub API access or current
content. Verify all linked data before presenting it as authoritative.

## Licence

No root licence file is tracked.
