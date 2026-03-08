# Scripts & Tooling Setup

How to wire Husky, lint-staged, and commitlint together with the
`@abinnovision` config packages.

## Prerequisites

- Node.js **24+**
- Yarn (via Corepack)

## Husky

Install Husky and initialize git hooks:

```shell
yarn add --dev husky
yarn husky init
```

This creates a `.husky/` directory with sample hooks.

### commit-msg hook

Create `.husky/commit-msg` to enforce
[Conventional Commits](https://www.conventionalcommits.org/)
via [commitlint config](../packages/commitlint-config/README.md):

```shell
#!/bin/sh

# Run commitlint with the message.
./node_modules/.bin/commitlint --edit "$1"
```

### pre-commit hook

Replace the default `pre-commit` hook with lint-staged and optional monorepo
checks:

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

Install lint-staged in the root of your project:

```shell
yarn add --dev lint-staged
```

### Single-package project

Add a `lint-staged` configuration to your `package.json`:

```json
{
  "lint-staged": {
    "{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}": [
      "prettier --write"
    ],
    "{{src,test}/**/*,*}.{t,j}s{,x}": ["eslint --fix"]
  }
}
```

> If your package has no `test` directory, drop `test` from the globs — e.g.
> `{src/**/*,*}.{t,j}s{,x}`. See [common globs](#common-globs) for all
> variants.

### Monorepo

In a monorepo, split lint-staged config between the root and individual
packages. Install `sort-package-json` to keep `package.json` keys consistently
sorted:

```shell
yarn add --dev sort-package-json
```

**Root `package.json`** handles global files (markdown, JSON, package.json
sorting):

```json
{
  "lint-staged": {
    "{*,.github/**/*}.{json{,5},md,y{,a}ml}": ["prettier --write"],
    "**/package.json": ["sort-package-json"]
  }
}
```

**Each package's `package.json`** handles its own source files:

```json
{
  "lint-staged": {
    "{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}": [
      "prettier --write"
    ],
    "{{src,test}/**/*,*}.{t,j}s{,x}": ["eslint --fix"]
  }
}
```

> If your package has no `test` directory, drop `test` from the globs — e.g.
> `{src/**/*,*}.{t,j}s{,x}`. See [common globs](#common-globs) for all
> variants.

lint-staged automatically resolves the nearest config for each staged file, so
both root and package configs run without additional setup.

## Commitlint

With the `commit-msg` hook from above, every commit message is validated
automatically. See the
[@abinnovision/commitlint-config README](../packages/commitlint-config/README.md)
for installation and configuration.

## Recommended Scripts

### Package scripts

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

> If your package has no `test` directory, drop `test` from the globs — e.g.
> `{src/**/*,*}.{t,j}s{,x}`. See [common globs](#common-globs) for all
> variants.

### Monorepo root scripts

The root `package.json` orchestrates checks across all packages. Root-level
prettier handles global files (markdown, JSON, YAML) that don't belong to any
package. Turbo runs the package-level scripts in parallel:

```json
{
  "scripts": {
    "check": "prettier --check '{*,.github/**/*}.{json{,5},md,y{,a}ml}' & turbo check",
    "fix": "prettier --write '{*,.github/**/*}.{json{,5},md,y{,a}ml}' & turbo fix"
  }
}
```

### Turbo task configuration

Define the task dependencies in `turbo.json` so that `check` and `fix` at the
root correctly delegate to each package:

```json
{
  "tasks": {
    "check": {
      "dependsOn": ["format:check", "lint:check"]
    },
    "fix": {
      "dependsOn": ["format:fix", "lint:fix"]
    },
    "format:check": {},
    "format:fix": {},
    "lint:check": {},
    "lint:fix": {}
  }
}
```

### Script overview

| Script         | Scope   | Purpose                                         |
| -------------- | ------- | ----------------------------------------------- |
| `lint:check`   | Package | Check for ESLint errors                         |
| `lint:fix`     | Package | Auto-fix ESLint errors                          |
| `format:check` | Package | Check Prettier formatting                       |
| `format:fix`   | Package | Auto-fix Prettier formatting                    |
| `check`        | Root    | Run all checks across packages (root only)      |
| `fix`          | Root    | Auto-fix all issues across packages (root only) |

## Common Globs

Reference globs used in lint-staged configs and package scripts. Adjust the
directory list (`src`, `test`, `scripts`) and file extensions to match your
repository.

### Source files (ESLint)

TypeScript and JavaScript files:

| Context                     | Glob                             |
| --------------------------- | -------------------------------- |
| Package with `src` + `test` | `{{src,test}/**/*,*}.{t,j}s{,x}` |
| Package with `src` only     | `{src/**/*,*}.{t,j}s{,x}`        |

### All files (Prettier)

Source files plus markdown, JSON, and YAML:

| Context                     | Glob                                                   |
| --------------------------- | ------------------------------------------------------ |
| Package with `src` + `test` | `{{src,test}/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}` |
| Package with `src` only     | `{src/**/*,*}.{{t,j}s{,x},json{,5},md,y{,a}ml}`        |
| Root global files           | `{*,.github/**/*}.{json{,5},md,y{,a}ml}`               |

### ESLint config files

Config files at the package root (used with the `configFiles` flavour):

| Context       | Glob             |
| ------------- | ---------------- |
| ESLint config | `*.{c,m,}{t,j}s` |

## See Also

- [@abinnovision/eslint-config-base](../packages/eslint-config-base/README.md)
- [@abinnovision/eslint-config-react](../packages/eslint-config-react/README.md)
- [@abinnovision/prettier-config](../packages/prettier-config/README.md)
- [@abinnovision/commitlint-config](../packages/commitlint-config/README.md)
