# @abinnovision/eslint-config-react

ESLint configuration for React applications. Built on
[@eslint-react/eslint-plugin](https://eslint-react.xyz) and
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks).

## ESLint Compatibility

This package requires **ESLint v9** (`^9.0.0`). ESLint v10 is **not** supported
because key plugins in the ecosystem have not yet released compatible versions.

Until all dependencies fully support ESLint v10, we pin to v9 to ensure a stable
and working configuration out of the box.

## External ESLint Plugin Dependencies

| Plugin                             | Purpose                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `@eslint-react/eslint-plugin`      | Comprehensive React linting (components, hooks, DOM, web APIs)            |
| `eslint-plugin-react-hooks`        | Rules of Hooks enforcement and exhaustive-deps checking                   |
| `eslint-plugin-better-tailwindcss` | Tailwind CSS class ordering, conflicts, and validation (tailwind flavour) |

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
