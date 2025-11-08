# @abinnovision/eslint-config-react

ESLint configuration for React applications. Built on
[@eslint-react/eslint-plugin](https://eslint-react.xyz) and
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks).

## Installation

```shell
yarn add --dev @abinnovision/eslint-config-react @abinnovision/eslint-config-base eslint
```

## Usage

```javascript
// eslint.config.js
import { base } from "@abinnovision/eslint-config-base";
import { react } from "@abinnovision/eslint-config-react";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base] }, { extends: [react] }]);
```

## Flavours

Specialized configurations for specific React use cases.

### Tailwind CSS

For React applications using Tailwind CSS. Enforces class ordering,
detects conflicts, and validates Tailwind usage.

```javascript
import { base } from "@abinnovision/eslint-config-base";
import { react, tailwind } from "@abinnovision/eslint-config-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { extends: [base] },
  { extends: [react] },
  { extends: [tailwind] },
]);
```

## Related Packages

- [@abinnovision/eslint-config-base](../eslint-config-base) - Base
  configuration
- [@abinnovision/prettier-config](../prettier-config) - Code formatting

## License

Apache-2.0
