# @abinnovision/eslint-config-react

ESLint config specifically for React related projects. This config **must
be used in conjunction with
the [@abinnovision/eslint-config-base](https://github.com/abinnovision/js-commons/tree/master/packages/eslint-config-base)
ESLint config**. This config is based on
the [AlloyTeam ESLint Config](https://github.com/AlloyTeam/eslint-config-alloy)
with some additional goodies on top.

## Installation

```shell
yarn add --dev \
	# This config itself.
	@abinnovision/eslint-config-react \
	# Required configs/plugins by this config.
	eslint eslint-plugin-react
```

## Dependencies

This config requires the following dependencies (defined as peer dependencies):

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
