# @abinnovision/prettier-config

Prettier config for all types of projects. The config mostly inherits the
default Prettier config. This additionally comes with a `.editorconfig`, which
is compatible with most editors.

## Installation

```shell
yarn add --dev @abinnovision/prettier-config
```

## EditorConfig

The EditorConfig is a small file in the root directory of your project called
`.editorconfig`. It defines various code style options for the project. This
packages comes with an opinionated version of this file.

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
