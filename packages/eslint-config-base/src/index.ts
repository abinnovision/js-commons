import * as AlloyBase from "eslint-config-alloy/base";
import * as eslintPluginImport from "eslint-plugin-import";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
		},
		plugins: {
			import: eslintPluginImport,
		},
		rules: {
			...(AlloyBase.rules ?? {}),
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
		},
	},
] satisfies Linter.FlatConfig[];

export = config;
