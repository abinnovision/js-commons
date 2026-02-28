# @abinnovision/eslint-config-base

ESLint configuration for JavaScript and TypeScript projects.

## ESLint Compatibility

This package requires **ESLint v9** (`^9.0.0`). ESLint v10 is **not** supported
because key plugins in the ecosystem have not yet released compatible versions.

Until all dependencies fully support ESLint v10, we pin to v9 to ensure a stable
and working configuration out of the box.

## External ESLint Plugin Dependencies

| Plugin                         | Purpose                                               |
| ------------------------------ | ----------------------------------------------------- |
| `@eslint/js`                   | ESLint core recommended rule set                      |
| `typescript-eslint`            | TypeScript parser and strict type-checked rule set    |
| `eslint-plugin-import`         | Import ordering, grouping, and validation             |
| `eslint-plugin-unused-imports` | Detect and auto-fix unused imports and variables      |
| `@vitest/eslint-plugin`        | Vitest-specific rules for test files (vitest flavour) |
| `globals`                      | Environment globals (e.g. Node.js for config files)   |

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
