# @abinnovision/prettier-config

Shared Prettier config with an opinionated `.editorconfig`.

## Installation

```shell
yarn add --dev @abinnovision/prettier-config
```

## EditorConfig

Sync the bundled `.editorconfig` into your project:

```shell
yarn sync-editorconfig
```

Optionally add it to your `postinstall` hook to keep it in sync automatically:

```json5
{
  scripts: {
    postinstall: "sync-editorconfig",
  },
}
```
