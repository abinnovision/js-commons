import * as TypescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
// @ts-ignore
import * as TypescriptEslintParser from "@typescript-eslint/parser";
import * as AlloyTypescript from "eslint-config-alloy/typescript";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": TypescriptEslintPlugin,
		},
		languageOptions: {
			parser: TypescriptEslintParser,
		},
		rules: {
			...(AlloyTypescript.rules ?? {}),
		},
	},
] satisfies Linter.FlatConfig[];

export = config;
