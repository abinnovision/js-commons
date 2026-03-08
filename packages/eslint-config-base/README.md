# @abinnovision/eslint-config-base

ESLint configuration for JavaScript and TypeScript projects.

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-base eslint
```

## ESLint Config Format

This package requires
ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
format (not legacy `.eslintrc`).

| Config file        | Requirements                                                          |
| ------------------ | --------------------------------------------------------------------- |
| `eslint.config.ts` | ESLint **9.18+** and [`jiti`](https://github.com/unjs/jiti) **v2.0+** |
| `eslint.config.js` | ESLint **9.0+**                                                       |

TypeScript config files are preferred. Install `jiti` as a dev dependency:

```shell
yarn add --dev jiti
```

If ESLint 9.18+ or `jiti` cannot be provided, use `eslint.config.js` (or
`.mjs`) instead. The imports and configuration are identical.

## Usage

```typescript
import { base } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base] }]);
```

If your `tsconfig.json` is not in the project root:

```typescript
import { base } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: [base],
    languageOptions: {
      parserOptions: {
        project: "./path/to/tsconfig.json",
      },
    },
  },
]);
```

## Flavours

Flavours are optional rule sets that complement `base`. They must always be used
alongside it.

### NestJS

```typescript
import { base, nestjs } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, nestjs] }]);
```

### Vitest

```typescript
import { base, vitest } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, vitest] }]);
```

### Stylistic

Enforces consistent code style (formatting, spacing, naming conventions).

```typescript
import { base, stylistic } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, stylistic] }]);
```

### Config Files

Relaxes rules for build tool and project configuration files (e.g.
`vite.config.ts`,
`webpack.config.js`): enables Node.js globals, allows `console` usage, and
removes
function length limits. You provide the file patterns:

```typescript
import { base, configFiles } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { extends: [base] },
  { files: ["**/*.config.{ts,js}"], extends: [configFiles] },
]);
```

## License

Apache-2.0
