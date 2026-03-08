# @abinnovision/eslint-config-base

ESLint configuration for JavaScript and TypeScript projects.

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-base eslint
```

## Usage

```javascript
// eslint.config.js
import { base } from "@abinnovision/eslint-config-base";

export default [{ extends: [base] }];
```

If your `tsconfig.json` is not in the project root:

```javascript
// eslint.config.js
import { base } from "@abinnovision/eslint-config-base";

export default [
  {
    extends: [base],
    languageOptions: {
      parserOptions: {
        project: "./path/to/tsconfig.json",
      },
    },
  },
];
```

## Flavours

### NestJS

```javascript
import { nestjs } from "@abinnovision/eslint-config-base";

export default [{ extends: [nestjs] }];
```

### Vitest

```javascript
import { base, vitest } from "@abinnovision/eslint-config-base";

export default [{ extends: [base, vitest] }];
```

### Stylistic

Enforces consistent code style (formatting, spacing, naming conventions).

```javascript
import { base, stylistic } from "@abinnovision/eslint-config-base";

export default [{ extends: [base, stylistic] }];
```

### Config Files

For build tool and project configuration files. Does not specify file patterns.

```javascript
import { base, configFiles } from "@abinnovision/eslint-config-base";

export default [
  { extends: [base] },
  {
    files: ["**/*.config.{ts,js}"],
    extends: [configFiles],
  },
];
```

## License

Apache-2.0
