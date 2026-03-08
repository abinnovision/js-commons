# @abinnovision/eslint-config-react

ESLint configuration for React applications. Builds
upon [@abinnovision/eslint-config-base](../eslint-config-base).

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-react @abinnovision/eslint-config-base eslint
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
import { react } from "@abinnovision/eslint-config-react";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, react] }]);
```

## Flavours

Flavours are optional rule sets that complement `react`. They must always be used alongside it.

### Tailwind CSS

```typescript
import { base } from "@abinnovision/eslint-config-base";
import { react, tailwind } from "@abinnovision/eslint-config-react";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, react, tailwind] }]);
```

## License

Apache-2.0
