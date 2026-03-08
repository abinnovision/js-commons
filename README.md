# @abinnovision/js-commons

Shared JS/TS configurations for abi group GmbH projects.

## Packages

- **[@abinnovision/eslint-config-base](./packages/eslint-config-base)** — ESLint for JS/TS with NestJS, Vitest, and config file flavours.
- **[@abinnovision/eslint-config-react](./packages/eslint-config-react)** — ESLint for React with optional Tailwind CSS support.
- **[@abinnovision/prettier-config](./packages/prettier-config)** — Shared Prettier config with EditorConfig support.
- **[@abinnovision/commitlint-config](./packages/commitlint-config)** — Conventional commit message enforcement.

## Getting Started

Set up all `@abinnovision` config packages in your project:

1. **Prettier** — Install and reference the shared config in your `package.json`.
   See [@abinnovision/prettier-config](./packages/prettier-config).

2. **ESLint** — Install and create an `eslint.config.ts` with the base config.
   Add flavours (NestJS, Vitest, Stylistic) as needed.
   See [@abinnovision/eslint-config-base](./packages/eslint-config-base) or
   [@abinnovision/eslint-config-react](./packages/eslint-config-react) for React
   projects.

3. **Commitlint** — Install and add the config to your `package.json`.
   See [@abinnovision/commitlint-config](./packages/commitlint-config).

4. **Husky, lint-staged & scripts** — Wire up git hooks, pre-commit checks, and
   CI-friendly scripts.
   See [Scripts & Tooling](./guides/scripts-and-tooling.md).

## Guides

- **[Scripts & Tooling](./guides/scripts-and-tooling.md)** — Husky, lint-staged, commitlint hooks, and recommended scripts.

## Development

Yarn 4 monorepo with Turbo. Requires Node.js 24+ and Yarn 4.11.0 (via Corepack).

```bash
yarn build   # Build all packages
yarn check   # Lint + format checks
yarn fix     # Auto-fix lint/format
yarn clean   # Clean build outputs
```

## License

Apache-2.0
