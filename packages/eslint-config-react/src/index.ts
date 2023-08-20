import * as AlloyReact from "eslint-config-alloy/react";

import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

const config: Linter.BaseConfig<ESLintRules> = {
	plugins: ["react"],
	rules: {
		...AlloyReact.rules,
	},
};

export = config;
