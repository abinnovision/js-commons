import { defineConfig } from "eslint/config";
import globals from "globals";

/**
 * ESLint configuration for build tool and project configuration files.
 *
 * This configuration does not specify file patterns - consumers decide which
 * files to apply this to (e.g., vite.config.ts, webpack.config.js, etc.).
 *
 * Usage example:
 * ```typescript
 * import { base, configFiles } from "@abinnovision/eslint-config-base";
 *
 * export default [
 *   { extends: [base] },
 *   {
 *     files: ["**\/*.config.{ts,js}", "vite.config.ts"],
 *     extends: [configFiles],
 *   }
 * ];
 * ```
 */
export const config = defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			/**
			 * Disallow the use of console.
			 * Disabled for config files that often log build information.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console": "off",

			/**
			 * Enforce a maximum number of lines per function.
			 * Disabled for complex build configurations.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "off",

			/**
			 * Disallow require statements except in import statements.
			 * Disabled for CommonJS config files.
			 *
			 * @see https://typescript-eslint.io/rules/no-var-requires
			 */
			"@typescript-eslint/no-var-requires": "off",
		},
	},
]);
