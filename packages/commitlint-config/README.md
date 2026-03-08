# @abinnovision/commitlint-config

Commitlint config based
on [Conventional Commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
with adjusted limits for abi group GmbH tooling.

## Installation

```shell
yarn add --dev @abinnovision/commitlint-config @commitlint/cli
```

## Usage

Add the config to your `package.json`:

```json
{
  "commitlint": {
    "extends": ["@abinnovision/commitlint-config"]
  }
}
```

## License

Apache-2.0
