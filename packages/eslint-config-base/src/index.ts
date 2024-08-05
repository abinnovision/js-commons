import { fixupPluginRules } from "@eslint/compat";
import AlloyBase from "eslint-config-alloy/base.js";
import eslintPluginImport from "eslint-plugin-import";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
		},
		plugins: {
			/**
			 * eslint-plugin-import is not yet compatible with ESLint v9.
			 * This is a temporary fix to make it compatible in the meantime.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/issues/2948
			 */
			import: fixupPluginRules(eslintPluginImport),
		},
		rules: {
			/**
			 * Use the rules from the base config as defaults.
			 *
			 * @see https://alloyteam.github.io/eslint-config-alloy/?hideOff=1
			 */
			...(AlloyBase.rules ?? {}),

			/**
			 * Enforce a consistent order and grouping of import statements.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
			 */
			"import/order": [
				"error",
				{
					groups: [
						// Externals
						["builtin", "external"],
						// Internals
						["internal", "unknown", "parent", "sibling", "index"],
						// Types
						["object", "type"],
					],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
					warnOnUnassignedImports: true,
				},
			],

			/**
			 * Enforce the "export" statement is placed at the end of the file.
			 * This avoids sprinkling export statements throughout the file.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
			 */
			"import/exports-last": "warn",

			/**
			 * Import statements should always be the first statements in a file.
			 * This makes it easier to identify the dependencies of a file.
			 *
			 * NOTE: Directives (e.g. "use strict") are allowed to come before import statements.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
			 */
			"import/first": "error",

			/**
			 * Enforce a newline after the import statements.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
			 */
			"import/newline-after-import": "error",

			/**
			 * Disable the "no-return-await" rule.
			 */
			"no-return-await": "off",
		},
	},
] satisfies Linter.FlatConfig[];

export default config;
