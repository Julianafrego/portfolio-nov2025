## Quick context

This is a small Vite + React portfolio site using TailwindCSS and shadcn/Radix UI primitives.
Key directories:

- `src/components/` — page sections and visual components (Header, About, Projects, footer).
- `src/components/ui/` — design-system primitives (buttons, inputs, etc.) generated/organized like shadcn UI.
- `src/assets/` — images and JSON metadata. Imports use Vite alias `@`.
- `src/lib/utils.js` — small helpers (e.g., `cn` wrapper around `clsx` + `twMerge`).

Primary build tools and scripts (see `package.json`):

- Install: pnpm preferred (packageManager set to pnpm). `pnpm install` (or `npm install` / `yarn` if you must).
- Dev server: `pnpm dev` → runs `vite`.
- Build: `pnpm build` → `vite build`.
- Preview: `pnpm preview`.
- Lint: `pnpm lint` → runs `eslint .`.

Important workspace conventions and patterns

- Import alias: `@` resolves to `src` (see `vite.config.js`). Use `@/components/...`, `@/lib/...`, `@/hooks/...`.
- Component files are `.jsx` and mostly default-exported React components; filenames are PascalCase (some exceptions like `footer.jsx`).
- UI primitives live in `src/components/ui/`. Reuse these primitives (e.g., `Button`) instead of reinventing styles.
- Utility `cn` in `src/lib/utils.js` is the canonical way to combine class names (uses `clsx` + `tailwind-merge`).
- Styling: Tailwind utility classes are used inline across components; prefer `cn()` when composing dynamic classes.

Examples to reference when editing or adding code

- Scroll helpers: Header buttons call `document.getElementById('projects')?.scrollIntoView(...)` — follow this lightweight approach for in-page navigation.
- Projects data: `src/components/Projects.jsx` shows local asset imports (e.g., `import imc from '../assets/imc.jpg'`) and feature flags (`project.github`, `project.site`) — keep data-driven rendering consistent.
- Motion: `framer-motion` animations are used for entrance/hover effects (see `Header.jsx` and `Projects.jsx`). Prefer small, performant animations.

Integration & external deps

- UI: Radix + shadcn-style primitives under `src/components/ui/` and `lucide-react` for icons.
- Animation: `framer-motion` and `gsap` are available; prefer `framer-motion` for React-friendly animations.
- The project sets `tailwindcss` and `@tailwindcss/vite` in Vite plugins — CSS lives in `src/index.css`/`src/App.css`.

Developer workflow notes for an AI agent

- Use the Vite alias when generating imports: `import { Button } from '@/components/ui/button.jsx'`.
- Run `pnpm install` then `pnpm dev` to test changes locally; `pnpm build` to validate production build.
- No test runner configured; avoid adding tests unless the repo owner asks — there are no existing test patterns to follow.
- Lint with `pnpm lint` and match existing code style (JSX, Tailwind utility classes). Keep changes minimal and follow existing naming.

When editing UI primitives

- Keep props API stable. Many components accept `className`, `variant`, `size` and forward them to the underlying element.
- When adding new primitives, place them under `src/components/ui/` and follow the pattern in existing files (default export of a component, export types if needed).

What I couldn't discover automatically

- No CI config or CONTRIBUTING file found — assume manual PRs and local lint/build checks.
- No tests or Node engine specified. If the maintainer wants tests or a Node version, ask before adding.

If something is unclear, ask for the maintainer's preference about package manager (pnpm vs npm), testing, and whether new UI primitives should follow any additional type-checking or prop conventions.

— End of instructions
