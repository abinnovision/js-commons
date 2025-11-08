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

### TypeScript Configuration

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

Specialized configurations for specific project types.

### NestJS

For NestJS applications with dependency injection patterns.

```javascript
import { nestjs } from "@abinnovision/eslint-config-base";

export default [{ extends: [nestjs] }];
```

### Vitest

For test files using Vitest.

```javascript
import { base, vitest } from "@abinnovision/eslint-config-base";

export default [{ extends: [base] }, { extends: [vitest] }];
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

## Related Packages

- [@abinnovision/eslint-config-react](../eslint-config-react) - React
  configuration
- [@abinnovision/prettier-config](../prettier-config) - Code formatting

## License

Apache-2.0
