# @abinnovision/eslint-config-react

ESLint configuration for React applications. Builds
upon [@abinnovision/eslint-config-base](../eslint-config-base).

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-react @abinnovision/eslint-config-base eslint
```

## Usage

```typescript
// eslint.config.ts
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
