import baseConfig from "@abinnovision/eslint-config-base";
import typescriptConfig from "@abinnovision/eslint-config-typescript";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
	...baseConfig,
	...typescriptConfig,
	{ files: ["**/*.js"], languageOptions: { globals: globals.node } },
]);
