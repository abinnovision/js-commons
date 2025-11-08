import { defineConfig } from "eslint/config";

/**
 * ESLint configuration tailored for NestJS projects.
 * Adjusts rules to accommodate NestJS patterns, especially for dependency injection.
 *
 * NOTE: This configuration is meant to be used in conjunction with
 * the base TypeScript ESLint configuration.
 */
export const config = defineConfig([
	{
		files: ["**/*.{ts,js}"],
		rules: {
			/**
			 * Enforce a maximum number of parameters in function definitions.
			 * Increased to 8 for NestJS dependency injection patterns.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-params
			 */
			"max-params": ["error", 8],

			/**
			 * Disallow useless constructors.
			 * Disabled for NestJS as DI decorators make constructors appear "useless".
			 *
			 * @see https://typescript-eslint.io/rules/no-useless-constructor
			 */
			"@typescript-eslint/no-useless-constructor": "off",

			/**
			 * Disallow empty functions.
			 * Allow empty constructors for NestJS DI parameter properties.
			 *
			 * @see https://typescript-eslint.io/rules/no-empty-function
			 */
			"@typescript-eslint/no-empty-function": [
				"error",
				{ allow: ["constructors"] },
			],

			/**
			 * Require or disallow parameter properties in class constructors.
			 * Enforces NestJS DI pattern using parameter properties.
			 *
			 * @see https://typescript-eslint.io/rules/parameter-properties
			 */
			"@typescript-eslint/parameter-properties": [
				"error",
				{
					allow: [
						"private readonly",
						"protected readonly",
						"public readonly",
						"private",
						"protected",
						"public",
					],
					prefer: "parameter-property",
				},
			],
		},
	},
]);
