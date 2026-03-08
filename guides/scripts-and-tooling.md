# Scripts & Tooling Setup

How to wire Husky, lint-staged, and commitlint together with the
`@abinnovision` config packages.

## Prerequisites

- Node.js **24+**
- Yarn (via Corepack)

## Husky

Install Husky and initialise git hooks:

```shell
yarn add --dev husky
yarn husky init
```

This creates a `.husky/` directory with a sample hooks.

### commit-msg hook

Create `.husky/commit-msg` to enforce
[Conventional Commits](https://www.conventionalcommits.org/) via commitlint:

```shell
#!/bin/sh

# Run commitlint with the message.
./node_modules/.bin/commitlint --edit "$1"
```

### pre-commit hook

Replace the default `pre-commit` hook with lint-staged:

```shell
#!/bin/sh

# Run lint-staged
./node_modules/.bin/lint-staged

# Check dependency duplicates
yarn dedupe --check

# Optional: check module boundaries (monorepo)
# ./node_modules/.bin/turbo boundaries
```

## lint-staged

Install lint-staged:

```shell
yarn add --dev lint-staged
```

Add a `lint-staged` configuration to your `package.json`. The exact patterns
depend on your project; here is a typical setup for a TypeScript project:

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{md,json,json5,yaml,yml}": [
      "prettier --write"
    ]
  }
}
```

This runs Prettier and ESLint (with auto-fix) on every staged file before
committing.

### Monorepo usage

In a monorepo, a common pattern is to split lint-staged config between the root
and individual packages:

**Root `package.json`** handles global files (markdown, JSON, package.json
sorting):

```json
{
  "lint-staged": {
    "{*,.github/**/*}.{json,json5,md,yaml,yml}": [
      "prettier --write"
    ],
    "**/package.json": [
      "sort-package-json"
    ]
  }
}
```

**Each package's `package.json`** handles its own source files:

```json
{
  "lint-staged": {
    "{{src,scripts}/**/*,*}.{ts,tsx,js,jsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "{{src,scripts}/**/*,*}.{json,json5,md,yaml,yml}": [
      "prettier --write"
    ]
  }
}
```

lint-staged automatically resolves the nearest config for each staged file, so
both root and package configs run without additional setup.

## Commitlint

With the `commit-msg` hook from above, every commit message is validated
automatically. See the
[@abinnovision/commitlint-config README](../packages/commitlint-config/README.md)
for installation and configuration.

## Recommended Scripts

### Package scripts

Each package should define its own lint and format scripts:

```json
{
  "scripts": {
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
    "format:check": "prettier --check .",
    "format:fix": "prettier --write ."
  }
}
```

### Monorepo root scripts

The root `package.json` aggregates checks across all packages. Only `check` and
`fix` are needed at the root:

```json
{
  "scripts": {
    "check": "turbo lint:check format:check",
    "fix": "turbo lint:fix format:fix"
  }
}
```

| Script         | Scope   | Purpose                         |
| -------------- | ------- | ------------------------------- |
| `lint:check`   | Package | Check for ESLint errors         |
| `lint:fix`     | Package | Auto-fix ESLint errors          |
| `format:check` | Package | Check Prettier formatting       |
| `format:fix`   | Package | Auto-fix Prettier formatting    |
| `check`        | Root    | Run all checks across packages  |
| `fix`          | Root    | Auto-fix all issues across packages |

## See Also

- [@abinnovision/eslint-config-base](../packages/eslint-config-base/README.md)
- [@abinnovision/eslint-config-react](../packages/eslint-config-react/README.md)
- [@abinnovision/prettier-config](../packages/prettier-config/README.md)
- [@abinnovision/commitlint-config](../packages/commitlint-config/README.md)
- [Fullstack Integration Guide](./fullstack-integration.md)
