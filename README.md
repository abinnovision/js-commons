# abinnovision/js-commons

Commonly used configs, etc. for the JavaScript ecosystem
within [AB INNOVISION GmbH](https://github.com/abinnovision). This repository is
structured as a monorepo, which emits multiple packages, which are defined in
the [packages](./packages) directory.

## Packages

Currently, the following packages exist:

- [eslint-config-base](./packages/eslint-config-base): ESLint config, which acts
  as base for all others, can be used standalone for Javascript only.
- [eslint-config-typescript](./packages/eslint-config-typescript): ESLint config
  for Typescript related projects.
- [eslint-config-react](./packages/eslint-config-react): ESLint config for React
  related projects.
- [prettier-config](./packages/prettier-config): Shared Prettier config for all
  projects.
- [commitlint-config](./packages/commitlint-config): Shared Commitlint config or
  all projects.

All packages are published under the [`@abinnovision`-scope to the GitHub
Packages Registry](https://github.com/orgs/abinnovision/packages)
and [npm](https://www.npmjs.com/).

## ESLint

ESLint is a popular open-source static code analysis tool for JavaScript. It is
used to analyze and identify common coding errors, stylistic issues, and
potential bugs in your JavaScript code. ESLint is highly configurable and
supports a wide range of plugins and rule sets to meet the specific needs of
your project.

For the [AB INNOVISION GmbH](https://github.com/abinnovision) organization, we
use a custom shared ESLint config, which is split into multiple parts.
Each part takes care about a specific technology (e.g. Typescript, React).
The configurations can (sometimes must) be used on conjunction with each other.

As we always use Prettier in conjunction with ESLint. Therefore, all the ESLint
configs are configured to not include any style-related rules, which are already
covered by Prettier.

### Javascript

For plain Javascript projects, the following config will be used:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)

_(This section just exists for the sake of completeness. We should never use
plain Javascript for new projects, always prefer Typescript.)_

Example configuration of `eslint.config.js`:

```javascript
/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [...require("@abinnovision/eslint-config-base")];
```

#### Installation

```shell
yarn add --dev @abinnovision/eslint-config-base
```

### Typescript

For Typescript only projects, the following configs will be used:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)
- [@abinnovision/eslint-config-typescript](./packages/eslint-config-typescript)

Example configuration in the `eslint.config.js`:

```javascript
/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [
	...require("@abinnovision/eslint-config-base"),
	...require("@abinnovision/eslint-config-typescript"),
];
```

#### Installation

```shell
yarn add --dev	@abinnovision/eslint-config-base @abinnovision/eslint-config-typescript
```

### Typescript React

For Typescript & React projects, the following configs will be used:

- [@abinnovision/eslint-config-base](./packages/eslint-config-base)
- [@abinnovision/eslint-config-typescript](./packages/eslint-config-typescript)
- [@abinnovision/eslint-config-react](./packages/eslint-config-react)

Example configuration in the `eslint.config.js`:

```javascript
/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [
	...require("@abinnovision/eslint-config-base"),
	...require("@abinnovision/eslint-config-typescript"),
	...require("@abinnovision/eslint-config-react"),
];
```

#### Installation

```shell
yarn add --dev @abinnovision/eslint-config-base @abinnovision/eslint-config-typescript @abinnovision/eslint-config-react
```

## Prettier

Prettier is a popular open-source code formatting tool for various programming
languages, including JavaScript, TypeScript, CSS, and HTML. It is used to
automatically format your code according to a set of predefined rules, which can
help to ensure consistency and readability across your codebase.

For the [AB INNOVISION GmbH](https://github.com/abinnovision) organization, we
use a
custom shared Prettier config. This config package also comes with a compatible
EditorConfig.

The following package is used for the Prettier config:

- [@abinnovision/prettier-config](./packages/prettier-config)

Example configuration in the `package.json`:

```json5
{
	// ...
	prettier: "@abinnovision/prettier-config",
	// ...
}
```

To synchronize the `.editorconfig` file from this package use the following:

```shell
yarn sync-editorconfig
```

Optionally, you can put it into your `postinstall` hook to always keep in sync
with the one defined in this project.

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
message formatting in Git repositories. It can be used to ensure that commit
messages follow a specific format, contain all the required information, and
provide a clear and concise summary of the changes made.

For the [AB INNOVISION GmbH](https://github.com/abinnovision) organization, we
use a
custom shared Commitlint config.

The following package is used for the Commitlint config:

- [@abinnovision/commitlint-config](./packages/commitlint-config)

Example configuration in the `package.json`:

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
