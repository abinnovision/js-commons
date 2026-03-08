# @abinnovision/eslint-config-react

ESLint configuration for React applications. Requires **ESLint v9** (v10 not yet supported).

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

export default defineConfig([{ extends: [base, react] }]);
```

## Flavours

### Tailwind CSS

```javascript
import { base } from "@abinnovision/eslint-config-base";
import { react, tailwind } from "@abinnovision/eslint-config-react";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [base, react, tailwind] }]);
```

## License

Apache-2.0
