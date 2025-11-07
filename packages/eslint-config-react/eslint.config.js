import baseConfig from "@abinnovision/eslint-config-base";
import typescriptConfig from "@abinnovision/eslint-config-typescript";
import { defineConfig } from "eslint/config";
import globals from "globals";

/** @type {import("@types/eslint").Linter.FlatConfig[]} */
export default defineConfig([
	...baseConfig,
	...typescriptConfig,
	{ files: ["**/*.js"], languageOptions: { globals: globals.node } },
]);
