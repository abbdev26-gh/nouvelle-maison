# Copilot Instructions for nouvelle-maison

## Project Overview
This is a **Nuxt 4** application in early development using the latest Vue 3 ecosystem. The project uses yarn as the package manager and follows Nuxt's opinionated directory structure conventions.

## Tech Stack
- **Framework**: Nuxt 4.2.1 with Vue 3.5.24
- **UI**: @nuxt/ui 4.1.0 (Nuxt's official component library)
- **Content**: @nuxt/content 3.8.2 for markdown-based content management
- **Image**: @nuxt/image 2.0.0 for optimized image handling
- **Database**: better-sqlite3 12.4.1 (SQLite integration, not yet configured)
- **Linting**: @nuxt/eslint 1.10.0 with ESLint 9
- **TypeScript**: Full TypeScript support via Nuxt's automatic configuration

## Architecture & Conventions

### Directory Structure
This project follows Nuxt's **auto-import convention**:
- `app/` - Contains `app.vue` (root component) - use this instead of `pages/` when not using file-based routing
- `pages/` - Auto-registered routes (create this when adding routing)
- `components/` - Auto-imported Vue components (create as needed)
- `composables/` - Auto-imported Vue composables (create as needed)
- `server/` - API routes and server middleware (create for backend logic)
- `public/` - Static assets served at root

### TypeScript Configuration
TypeScript is configured via **project references** (see `tsconfig.json`). The actual type definitions are generated in `.nuxt/` during development. Do not edit `.nuxt/` files directly - they're regenerated on each `nuxt prepare`.

### ESLint Configuration
ESLint uses the **flat config format** (eslint.config.mjs) with Nuxt's preset. The base config is auto-generated in `.nuxt/eslint.config.mjs`. Add custom rules directly in the root `eslint.config.mjs` file.

## Development Workflows

### Setup & Development
```bash
yarn install              # Install dependencies (triggers nuxt prepare)
yarn dev                  # Start dev server on http://localhost:3000
yarn build                # Build for production
yarn preview              # Preview production build locally
yarn generate             # Generate static site
```

### Key Module Usage

**@nuxt/ui Components:**
- Auto-imported from `#components` - use without imports (e.g., `<UButton>`, `<UCard>`)
- Tailwind CSS-based, highly customizable
- See https://ui.nuxt.com for component API

**@nuxt/content:**
- Place markdown/JSON/YAML in `content/` directory
- Query with `queryContent()` composable
- Render with `<ContentRenderer>` or `<ContentDoc>` components

**@nuxt/image:**
- Use `<NuxtImg>` for optimized images with automatic srcset
- Use `<NuxtPicture>` for art direction and format optimization

**better-sqlite3:**
- Database connection logic should go in `server/utils/` or `server/plugins/`
- Example location: `server/utils/db.ts` for database instance

## Project-Specific Patterns

### Current State
The project is in **minimal starter state** - only `app.vue` exists with `<NuxtWelcome>` component. When building features:
1. Create `pages/` directory for file-based routing (removes need for `app.vue`)
2. Use `<NuxtPage>` in `app.vue` or an `app/` layout file
3. Create `server/api/` for backend endpoints

### Database Integration
While `better-sqlite3` is installed, no database configuration exists yet. When implementing:
- Initialize DB in `server/plugins/database.ts` for runtime initialization
- Create tables via migration system or initialization script
- Use `server/api/` routes to expose database operations
- Store DB file in `.data/` directory (gitignored)

## Important Notes
- **Nuxt 4** is the latest version (released 2024) with breaking changes from Nuxt 3
- **compatibilityDate** set to 2025-07-15 - affects module behavior and defaults
- Project uses **ESM** (`"type": "module"` in package.json)
- Dev tools enabled in config for Vue DevTools integration
- No testing framework configured yet
