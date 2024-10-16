import AlloyReact from "eslint-config-alloy/react.js";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

import type { Linter } from "eslint";

const config = [
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			react: eslintPluginReact,
			"react-hooks": eslintPluginReactHooks,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...(AlloyReact.rules ?? {}),

			/**
			 * Apply the rules from the eslint-plugin-react-hooks package and use the recommended
			 * configuration.
			 *
			 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
			 */
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	},
] satisfies Linter.Config[];

export default config;
