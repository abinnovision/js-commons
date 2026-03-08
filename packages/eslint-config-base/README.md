# @abinnovision/eslint-config-base

ESLint configuration for JavaScript and TypeScript projects.

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-base eslint
```

## Usage

```typescript
// eslint.config.ts
import { base } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base] }]);
```

If your `tsconfig.json` is not in the project root:

```typescript
// eslint.config.ts
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

Flavours are optional rule sets that complement `base`. They must always be used alongside it.

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

For build tool and project configuration files. Does not specify file patterns.

```typescript
import { base, configFiles } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { extends: [base] },
  {
    files: ["**/*.config.{ts,js}"],
    extends: [configFiles],
  },
]);
```

## License

Apache-2.0
