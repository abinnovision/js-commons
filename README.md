# abinnovision/js-commons

This repository contains commonly used configurations for the JavaScript
ecosystem within [AB INNOVISION GmbH](https://github.com/abinnovision).
Organized as a monorepo, it generates multiple packages defined in the
[packages](./packages) directory.

## Packages

Presently, the following packages are available:

- [eslint-config-base](./packages/eslint-config-base): ESLint configuration,
  serving as a base for all others. It can be used independently for JavaScript
  projects.
- [eslint-config-typescript](./packages/eslint-config-typescript): ESLint
  configuration tailored for TypeScript projects.
- [eslint-config-react](./packages/eslint-config-react): ESLint configuration
  designed for React projects.
- [prettier-config](./packages/prettier-config): Shared Prettier configuration
  for all projects.
- [commitlint-config](./packages/commitlint-config): Shared Commitlint
  configuration for all projects.

All packages are published under the
[`@abinnovision` scope on the GitHub Packages Registry](https://github.com/orgs/abinnovision/packages)
and [npm](https://www.npmjs.com/).

## ESLint

ESLint, a widely-used open-source static code analysis tool for JavaScript, is
employed to identify coding errors, stylistic issues, and potential bugs. In
[AB INNOVISION GmbH](https://github.com/abinnovision), a custom shared ESLint
configuration is used, split into multiple parts, each catering to a specific
technology (e.g., TypeScript, React). These configurations can be used in
conjunction with each other.

As Prettier is always used in conjunction with ESLint, ESLint configurations are
set to exclude any style-related rules covered by Prettier.

### Javascript

For plain JavaScript projects, use the following configuration:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)

Example configuration in `eslint.config.js`:

```javascript
import baseConfig from "@abinnovision/eslint-config-base";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [...baseConfig];
```

#### Installation

```shell
yarn add --dev @abinnovision/eslint-config-base
```

### Typescript

For TypeScript-only projects, use the following configurations:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)
- [@abinnovision/eslint-config-typescript](./packages/eslint-config-typescript)

Example configuration in `eslint.config.js`:

```javascript
import baseConfig from "@abinnovision/eslint-config-base";
import typescriptConfig from "@abinnovision/eslint-config-typescript";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [...baseConfig, ...typescriptConfig];
```

#### Installation

```shell
yarn add --dev	@abinnovision/eslint-config-base @abinnovision/eslint-config-typescript
```

### Typescript React

For TypeScript & React projects, use the following configurations:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)
- [@abinnovision/eslint-config-typescript](./packages/eslint-config-typescript)
- [@abinnovision/eslint-config-react](./packages/eslint-config-react)

Example configuration in `eslint.config.js`:

```javascript
import baseConfig from "@abinnovision/eslint-config-base";
import typescriptConfig from "@abinnovision/eslint-config-typescript";
import reactConfig from "@abinnovision/eslint-config-react";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [...baseConfig, ...typescriptConfig, ...reactConfig];
```

#### Installation

```shell
yarn add --dev @abinnovision/eslint-config-base @abinnovision/eslint-config-typescript @abinnovision/eslint-config-react
```

## Prettier

Prettier, a popular open-source code formatting tool, is used for various
programming languages, including JavaScript, TypeScript, CSS, and HTML. It
automatically formats code according to predefined rules, ensuring consistency
and readability.

For [AB INNOVISION GmbH](https://github.com/abinnovision), a custom shared
Prettier configuration is employed. This configuration package also includes a
compatible EditorConfig.

The following package is used for the Prettier configuration:

- [@abinnovision/prettier-config](./packages/prettier-config)

Example configuration in `package.json`:

```json5
{
  // ...
  prettier: "@abinnovision/prettier-config",
  // ...
}
```

To synchronize the `.editorconfig` file from this package, use the following:

```shell
yarn sync-editorconfig
```

Optionally, you can include it in your `postinstall` hook to stay in sync with
the one defined in this project.

```json5
{
  // ...
  scripts: {
    // ...
    postinstall: "sync-editorconfig",
  },
  // ...
}
```

### Installation

```shell
yarn add --dev @abinnovision/prettier-config
```

## Commitlint

Commitlint is a popular open-source tool used to enforce consistent commit
message formatting in Git repositories. It ensures that commit messages follow a
specific format, contain all required information, and provide a clear and
concise summary of the changes made.

For [AB INNOVISION GmbH](https://github.com/abinnovision), a custom shared
Commitlint configuration is used.

The following package is used for the Commitlint configuration:

- [@abinnovision/commitlint-config](./packages/commitlint-config)

Example configuration in `package.json`:

```json5
{
  // ...
  commitlint: {
    extends: ["@abinnovision/commitlint-config"],
  },
  // ...
}
```

### Installation

```shell
yarn add --dev @abinnovision/commitlint-config
```

## Appendix

### ESLint with Globals

If you need to use global variables in your project, you can easily add them by
yourself to the `eslint.config.js` file.

For example, to add the `window` global variable, use the following:

```javascript
import baseConfig from "@abinnovision/eslint-config-base";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        window: true,
      },
    },
  },
];
```

If you're within a default environment (e.g. node), it's possible to use the
[globals package](https://www.npmjs.com/package/globals) to add all available
globals for that environment.

```javascript
import baseConfig from "@abinnovision/eslint-config-base";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: require("globals").node,
    },
  },
];
```

### ESLint flat-config with types

The ESLint configuration is defined as a flat config file (`eslint.config.js`).
This is just a basic JavaScript file that exports an array of ESLint
configuration objects. The type of this array is defined in `@types/eslint` and
can be imported to get type support.

```javascript
/** @type {import("@types/eslint").Linter.Config[]} */
export default [
  // here goes the config
];
```
