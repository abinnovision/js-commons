import AlloyReact from "eslint-config-alloy/react.js";
import eslintPluginReact from "eslint-plugin-react";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			react: eslintPluginReact,
		},
		rules: {
			...(AlloyReact.rules ?? {}),
		},
	},
] satisfies Linter.FlatConfig[];

export = config;
