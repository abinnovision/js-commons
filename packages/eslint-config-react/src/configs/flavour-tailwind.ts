import { defineConfig } from "eslint/config";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

/**
 * ESLint configuration for Tailwind CSS.
 *
 * Note that this configuration include stylistic rules.
 */
export const config = defineConfig([
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"better-tailwindcss": betterTailwindcss,
		},
		rules: {
			/**
			 * Enforce consistent line wrapping.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/enforce-consistent-line-wrapping": [
				"warn",
				// Prefer single line when possible. We use tabs for indentation.
				{ preferSingleLine: true, indent: "tab" },
			],

			/**
			 * Enforce consistent class order.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/enforce-consistent-class-order": "warn",

			/**
			 * Enforce shorthand classes.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/enforce-shorthand-classes": "warn",

			/**
			 * Remove duplicate classes.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/no-duplicate-classes": "warn",

			/**
			 * Disallow unnecessary whitespace.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/no-unnecessary-whitespace": "warn",

			/**
			 * Report unregistered classes.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/no-unregistered-classes": [
				"warn",
				{ detectComponentClasses: true },
			],

			/**
			 * Report conflicting classes.
			 *
			 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss
			 */
			"better-tailwindcss/no-conflicting-classes": "error",
		},
	},
]);
