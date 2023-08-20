import * as AlloyTypescript from "eslint-config-alloy/typescript";

import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

const config: Linter.BaseConfig<ESLintRules> = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		...AlloyTypescript.rules,
	},
};

export = config;
