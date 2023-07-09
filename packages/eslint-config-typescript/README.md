# @abinnovision/eslint-config-typescript

ESLint config specifically for Typescript related projects. This config **must
be used in conjunction with
the [@abinnovision/eslint-config-base](https://github.com/abinnovision/js-commons/tree/master/packages/eslint-config-base)
ESLint config**. This config is based on
the [AlloyTeam ESLint Config](https://github.com/AlloyTeam/eslint-config-alloy)
with some additional goodies on top.

## Installation

```shell
yarn add --dev \
	# This config itself.
	@abinnovision/eslint-config-typescript \
	# Required configs/plugins by this config.
	eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Dependencies

This config requires the following dependencies (defined as peer dependencies):

- [eslint](https://www.npmjs.com/package/eslint)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
