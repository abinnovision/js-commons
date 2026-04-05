# Monorepo Scripts & Tooling Setup

How to wire ESLint, Prettier, Husky, lint-staged, and commitlint together with
the `@abinnovision` config packages in a monorepo.

## Prerequisites

- Node.js **24+**
- Yarn (via Corepack)
- Turborepo monorepo with the default `apps/` and `packages/` workspace layout

## Install Dependencies

### Root

```shell
yarn add --dev \
  prettier @abinnovision/prettier-config \
  commitlint @abinnovision/commitlint-config \
  husky lint-staged sort-package-json
```

### Each package

```shell
yarn add --dev \
  eslint @abinnovision/eslint-config-base \
  prettier @abinnovision/prettier-config
```

For React packages, also install `@abinnovision/eslint-config-react` alongside
`-base`.

ESLint and Prettier configuration is covered in the respective package READMEs
(see [References](#references)).

## Commitlint

See the
[@abinnovision/commitlint-config README](../packages/commitlint-config/README.md)
for configuration. Once configured, the Husky `commit-msg` hook (set up below)
enforces [Conventional Commits](https://www.conventionalcommits.org/)
automatically.

## lint-staged

### Root

The root `package.json` handles global files (markdown, JSON, YAML) and keeps
`package.json` keys sorted:

```json
{
  "lint-staged": {
    "{*,.github/**/*}.{json{,5},md,y{,a}ml}": [
      "prettier --write"
    ],
    "**/package.json": [
      "sort-package-json"
    ]
  }
}
```

### Packages

Each package's `package.json` handles its own source files:

```json
{
  "lint-staged": {
    "{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}": [
      "prettier --write"
    ],
    "{{src,test}/**/*,*}.{t,j}s{,x}": [
      "eslint --fix"
    ]
  }
}
```

lint-staged automatically resolves the nearest config for each staged file, so
both root and package configs run without additional setup.

## Package Scripts

Each package defines its own lint and format scripts:

```json
{
  "scripts": {
    "lint:check": "eslint '{{src,test}/**/*,*}.{t,j}s{,x}'",
    "lint:fix": "eslint '{{src,test}/**/*,*}.{t,j}s{,x}' --fix",
    "format:check": "prettier --check '{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}'",
    "format:fix": "prettier --write '{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}'"
  }
}
```

## Root Scripts & Turbo

The root `package.json` orchestrates checks across all packages. Root-level
Prettier handles global files that don't belong to any package, while Turbo runs
the package-level scripts in parallel:

```json
{
  "scripts": {
    "check": "prettier --check '{*,.github/**/*}.{json{,5},md,y{,a}ml}' & turbo check",
    "fix": "prettier --write '{*,.github/**/*}.{json{,5},md,y{,a}ml}' & turbo fix",
    "sort:check": "sort-package-json '{apps,packages}/**!(node_modules)/package.json' 'package.json' --check",
    "sort:fix": "sort-package-json '{apps,packages}/**!(node_modules)/package.json' 'package.json'"
  }
}
```

Define the task dependencies in `turbo.json` so that `check` and `fix` at the
root correctly delegate to each package:

```json
{
  "tasks": {
    "check": {
      "dependsOn": [
        "format:check",
        "lint:check"
      ]
    },
    "fix": {
      "dependsOn": [
        "format:fix",
        "lint:fix"
      ]
    },
    "format:check": {},
    "format:fix": {},
    "lint:check": {},
    "lint:fix": {}
  }
}
```

### Script overview

| Script         | Scope   | Purpose                                    |
|----------------|---------|--------------------------------------------|
| `lint:check`   | Package | Check for ESLint errors                    |
| `lint:fix`     | Package | Auto-fix ESLint errors                     |
| `format:check` | Package | Check Prettier formatting                  |
| `format:fix`   | Package | Auto-fix Prettier formatting               |
| `sort:check`   | Root    | Check `package.json` key order             |
| `sort:fix`     | Root    | Auto-sort `package.json` keys              |
| `check`        | Root    | Run all checks across packages (root only) |
| `fix`          | Root    | Auto-fix all issues across packages        |

## Husky

Initialize Husky to set up git hooks:

```shell
yarn husky init
```

This creates a `.husky/` directory with sample hooks.

### commit-msg hook

Create `.husky/commit-msg` to validate commit messages via commitlint:

```shell
#!/bin/sh

# Run commitlint with the message.
./node_modules/.bin/commitlint --edit "$1"
```

### pre-commit hook

Replace the default `pre-commit` hook with lint-staged and monorepo checks:

```shell
#!/bin/sh

# Run lint-staged
./node_modules/.bin/lint-staged

# Check dependency duplicates
yarn dedupe --check

# Optional: check module boundaries
# ./node_modules/.bin/turbo boundaries
```

### Cleanup

Husky supports any git hook, so feel free to add more as needed.
**Important:** If no further hooks are needed, remove all other default hooks
created by `husky init` to keep the repo clean.

## References

- [@abinnovision/eslint-config-base](../packages/eslint-config-base/README.md)
- [@abinnovision/eslint-config-react](../packages/eslint-config-react/README.md)
- [@abinnovision/prettier-config](../packages/prettier-config/README.md)
- [@abinnovision/commitlint-config](../packages/commitlint-config/README.md)
