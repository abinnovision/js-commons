# @abinnovision/js-commons

Shared JS/TS configurations for abi group GmbH projects.

## Packages

- **[@abinnovision/eslint-config-base](./packages/eslint-config-base)** — ESLint for JS/TS with NestJS, Vitest, and config file flavours.
- **[@abinnovision/eslint-config-react](./packages/eslint-config-react)** — ESLint for React with optional Tailwind CSS support.
- **[@abinnovision/prettier-config](./packages/prettier-config)** — Shared Prettier config with EditorConfig support.
- **[@abinnovision/commitlint-config](./packages/commitlint-config)** — Conventional commit message enforcement.

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
