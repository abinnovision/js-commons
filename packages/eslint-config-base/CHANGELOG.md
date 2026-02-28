# Changelog

## [3.1.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v3.0.3...eslint-config-base-v3.1.0) (2026-02-28)


### Features

* downgrade to eslint v9 and add documentation about it ([#575](https://github.com/abinnovision/js-commons/issues/575)) ([5810b53](https://github.com/abinnovision/js-commons/commit/5810b538b386fb56848a3d1755a8eda7123e88fd))

## [3.0.3](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v3.0.2...eslint-config-base-v3.0.3) (2026-02-19)


### Bug Fixes

* support eslint v10 ([#572](https://github.com/abinnovision/js-commons/issues/572)) ([ec96dd8](https://github.com/abinnovision/js-commons/commit/ec96dd8f540af14b57dda20afd5adf34df721486))

## [3.0.2](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v3.0.1...eslint-config-base-v3.0.2) (2025-11-20)


### Bug Fixes

* add curly braces rule to base config ([#565](https://github.com/abinnovision/js-commons/issues/565)) ([e22d6eb](https://github.com/abinnovision/js-commons/commit/e22d6eb17ed16f5c82f5a502e6ea1c6170731d02))
* add curly rule with all option ([#567](https://github.com/abinnovision/js-commons/issues/567)) ([e1802e1](https://github.com/abinnovision/js-commons/commit/e1802e139d6a0400a02ba3c7e0fe06df2003b94f))

## [3.0.1](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v3.0.0...eslint-config-base-v3.0.1) (2025-11-08)


### Bug Fixes

* trigger synthetic patch release for all packages ([0a42ee3](https://github.com/abinnovision/js-commons/commit/0a42ee36601f88ff232a41a8682266543849b3c6))

## [3.0.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v2.2.0...eslint-config-base-v3.0.0) (2025-11-08)


### ⚠ BREAKING CHANGES

* refactor eslint config with new base configs and add flavours

### Features

* refactor eslint config with new base configs and add flavours ([581cfce](https://github.com/abinnovision/js-commons/commit/581cfceac98653d5b6f88a16f7807541b49320c8))


### Bug Fixes

* migrate eslint configs to use defineConfig ([#541](https://github.com/abinnovision/js-commons/issues/541)) ([eb24dca](https://github.com/abinnovision/js-commons/commit/eb24dca423b594711b727da84f4c4026f781c9e4))

## [2.2.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v2.1.2...eslint-config-base-v2.2.0) (2024-10-24)


### Features

* **eslint:** add unused-imports plugin and update rules ([#356](https://github.com/abinnovision/js-commons/issues/356)) ([303352c](https://github.com/abinnovision/js-commons/commit/303352c986709a06ec7a02aff322ce2e5dcf7342))

## [2.1.2](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v2.1.1...eslint-config-base-v2.1.2) (2024-10-16)


### Bug Fixes

* migrate to Linter.Config type ([#340](https://github.com/abinnovision/js-commons/issues/340)) ([30a1c19](https://github.com/abinnovision/js-commons/commit/30a1c19c3a2f4c2b94e6086486951145b399e15d))
* only support eslint v9 ([#345](https://github.com/abinnovision/js-commons/issues/345)) ([7425fdc](https://github.com/abinnovision/js-commons/commit/7425fdc9c2d8912988697ab07b9a8f42d96786d4))
* remove fixupPluginRules for eslint-plugin-import ([#346](https://github.com/abinnovision/js-commons/issues/346)) ([f964079](https://github.com/abinnovision/js-commons/commit/f9640791b8f811fb1bbe12b3544872ea25a77d16))
* use spaces for markdown files ([#349](https://github.com/abinnovision/js-commons/issues/349)) ([eeb8b33](https://github.com/abinnovision/js-commons/commit/eeb8b335916602b55ca02cfdea352bc296fa7ffb))

## [2.1.1](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v2.1.0...eslint-config-base-v2.1.1) (2024-10-10)


### Bug Fixes

* **eslint-config:** add ignores to exclude build directories ([#329](https://github.com/abinnovision/js-commons/issues/329)) ([b6821d1](https://github.com/abinnovision/js-commons/commit/b6821d167217de9baa33475bc8fa90cb48bf5153))

## [2.1.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v2.0.0...eslint-config-base-v2.1.0) (2024-08-05)


### Features

* migrate to esm ([#278](https://github.com/abinnovision/js-commons/issues/278)) ([fed850d](https://github.com/abinnovision/js-commons/commit/fed850d979f7ba83fae75adadcfd0024f2acd242))


### Bug Fixes

* wrap eslint-plugin-import with compat package ([#280](https://github.com/abinnovision/js-commons/issues/280)) ([2f61aca](https://github.com/abinnovision/js-commons/commit/2f61aca45ccfb248868815906d87d4be6656dcf5))

## [2.0.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v1.2.0...eslint-config-base-v2.0.0) (2023-11-03)


### ⚠ BREAKING CHANGES

* will drop support for legacy eslint configs

### Features

* enable new ESLint rules ([#104](https://github.com/abinnovision/js-commons/issues/104)) ([ffac1dc](https://github.com/abinnovision/js-commons/commit/ffac1dc4bc2c6794c2f7d1bd1ec72542e20cd06d))
* migrate to eslint flat config ([#93](https://github.com/abinnovision/js-commons/issues/93)) ([7568ba1](https://github.com/abinnovision/js-commons/commit/7568ba1782f912357e18619ab3e4e56a0c738a1c))

## [1.2.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v1.1.0...eslint-config-base-v1.2.0) (2023-10-28)


### Features

* update eslint-config-alloy to v5.0.0 ([6acd7da](https://github.com/abinnovision/js-commons/commit/6acd7dacca62218dc3b72611dae6b0154ba16388))


### Bug Fixes

* align peer dependency versions ([#88](https://github.com/abinnovision/js-commons/issues/88)) ([62e752d](https://github.com/abinnovision/js-commons/commit/62e752d625fd3f454a50c58119f52fa4bbba297d))

## [1.1.0](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v1.0.2...eslint-config-base-v1.1.0) (2023-04-21)

### Features

- first implementation ([470e5d5](https://github.com/abinnovision/js-commons/commit/470e5d591bd711b5d793037c946bf56883d5acf3))

### Bug Fixes

- add correct license to all packages ([af7343d](https://github.com/abinnovision/js-commons/commit/af7343dbdb93329a0321a369f81e9b37da9068fa))
- emit declarations ([616f817](https://github.com/abinnovision/js-commons/commit/616f817ca7701e160325e1e81d633df345244cc3))

## [1.0.2](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v1.0.1...eslint-config-base-v1.0.2) (2023-04-21)

### Bug Fixes

- emit declarations ([616f817](https://github.com/abinnovision/js-commons/commit/616f817ca7701e160325e1e81d633df345244cc3))

## [1.0.1](https://github.com/abinnovision/js-commons/compare/eslint-config-base-v1.0.0...eslint-config-base-v1.0.1) (2023-04-21)

### Bug Fixes

- add correct license to all packages ([af7343d](https://github.com/abinnovision/js-commons/commit/af7343dbdb93329a0321a369f81e9b37da9068fa))

## 1.0.0 (2023-02-23)

### Features

- first implementation ([470e5d5](https://github.com/abinnovision/eslint-config/commit/470e5d591bd711b5d793037c946bf56883d5acf3))
