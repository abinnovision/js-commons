import TypescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
// @ts-ignore
import TypescriptEslintParser from "@typescript-eslint/parser";
import AlloyTypescript from "eslint-config-alloy/typescript.js";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": TypescriptEslintPlugin as any,
		},
		languageOptions: {
			parser: TypescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			/**
			 * Use the rules from the base config as defaults.
			 *
			 * @see https://alloyteam.github.io/eslint-config-alloy/?hideOff=1&rule=typescript
			 */
			...(AlloyTypescript.rules ?? {}),

			/**
			 * Enforce to use `return await` for async functions.
			 * This rule is set to "always" because it's a good practice to use
			 * `return await` for async functions.
			 *
			 * NOTE: This is overridden from the base config.
			 *
			 * @see https://typescript-eslint.io/rules/return-await/
			 * @see https://stackoverflow.com/questions/43353087/are-there-performance-concerns-with-return-await/70979225#70979225
			 */
			"@typescript-eslint/return-await": ["warn", "always"],

			/**
			 * Disable no-unused-vars due to unused-imports plugin
			 */
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
] satisfies Linter.Config[];

export default config;
