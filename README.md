# @abinnovision/js-commons

Shared JavaScript and TypeScript configurations for AB INNOVISION GmbH projects.

## Packages

This monorepo publishes the following npm packages under the `@abinnovision`
scope:

### ESLint

- **[@abinnovision/eslint-config-base](./packages/eslint-config-base)** - ESLint
  configuration for JavaScript and TypeScript projects. Includes flavours for
  NestJS, Vitest, and config files.
- **[@abinnovision/eslint-config-react](./packages/eslint-config-react)** -
  ESLint configuration for React applications with optional Tailwind CSS
  support.

### Code Formatting

- **[@abinnovision/prettier-config](./packages/prettier-config)** - Shared
  Prettier configuration with EditorConfig support.

### Commit Messages

- **[@abinnovision/commitlint-config](./packages/commitlint-config)** -
  Commitlint configuration for enforcing conventional commit messages.

All packages are published to
[npm](https://www.npmjs.com/search?q=%40abinnovision) and
[GitHub Packages Registry](https://github.com/orgs/abinnovision/packages).

## Quick Start

Visit the individual package READMEs above for installation and usage
instructions.

## Development

This is a Yarn 4 monorepo using Turbo for build orchestration.

### Prerequisites

- Node.js 24.x or later
- Yarn 4.11.0 (managed via Corepack)

### Commands

```bash
# Build all packages
yarn build

# Run quality checks (lint + format)
yarn check

# Fix formatting and linting issues
yarn fix

# Clean build outputs
yarn clean
```

## License

Apache-2.0
