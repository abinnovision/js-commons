import * as AlloyBase from "eslint-config-alloy/base";

import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

const config: Linter.BaseConfig<ESLintRules> = {
	parserOptions: {
		ecmaVersion: "latest",
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	plugins: ["import"],
	rules: {
		// Use Alloy as base rules.
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
};

export = config;
