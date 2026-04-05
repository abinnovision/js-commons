# @abinnovision/js-commons

Shared JS/TS configurations for abi group GmbH projects.

## Packages Overview

- **[@abinnovision/eslint-config-base](./packages/eslint-config-base)** — ESLint for JS/TS with NestJS, Vitest, and config file flavours.
- **[@abinnovision/eslint-config-react](./packages/eslint-config-react)** — ESLint for React with optional Tailwind CSS support.
- **[@abinnovision/prettier-config](./packages/prettier-config)** — Shared Prettier config with EditorConfig support.
- **[@abinnovision/commitlint-config](./packages/commitlint-config)** — Conventional commit message enforcement.

## Getting Started

This repo provides shared configs for:

- **Prettier** — See [@abinnovision/prettier-config](./packages/prettier-config).
- **ESLint** — See [@abinnovision/eslint-config-base](./packages/eslint-config-base)
  or [@abinnovision/eslint-config-react](./packages/eslint-config-react) for React.
- **Commitlint** — See [@abinnovision/commitlint-config](./packages/commitlint-config).

## Guides

- **[Monorepo Scripts & Tooling](./guides/monorepo-scripts-and-tooling.md)** — Husky, lint-staged, commitlint hooks, and recommended scripts for a full monorepo setup.

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
