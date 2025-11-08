import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

/**
 * ESLint configuration tailored for Vitest test files.
 * Relaxes strict rules to accommodate common testing patterns while adding
 * Vitest-specific linting rules.
 *
 * NOTE: This configuration is meant to be used in conjunction with
 * the base TypeScript ESLint configuration.
 */
export const config = defineConfig([
	{
		files: [
			"**/*.test.{ts,tsx,js,jsx}",
			"**/*.spec.{ts,tsx,js,jsx}",
			"**/__tests__/**/*.{ts,tsx,js,jsx}",
		],
		plugins: {
			vitest,
		},
		languageOptions: {
			globals: {
				...vitest.environments.env.globals,
			},
		},
		settings: {
			vitest: {
				typecheck: true,
			},
		},
		rules: {
			/**
			 * Enable Vitest recommended rules.
			 */
			...vitest.configs.recommended.rules,

			/**
			 * Enforce a maximum number of parameters in function definitions.
			 * Increased to 5 for test setup functions that receive fixtures and mocks.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-params
			 */
			"max-params": ["error", 5],

			/**
			 * Enforce a maximum depth that callbacks can be nested.
			 * Increased to 5 for describe/it/beforeEach nesting patterns.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
			 */
			"max-nested-callbacks": ["error", 5],

			/**
			 * Enforce a maximum cyclomatic complexity allowed in a program.
			 * Increased to 30 and downgraded to warn for complex test scenarios.
			 *
			 * @see https://eslint.org/docs/latest/rules/complexity
			 */
			complexity: ["warn", 30],

			/**
			 * Enforce a maximum number of lines per function.
			 * Disabled for test cases with comprehensive setup and assertions.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": "off",

			/**
			 * Enforce a maximum number of statements allowed in function blocks.
			 * Disabled for tests with multiple setup and assertion statements.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-statements
			 */
			"max-statements": "off",

			/**
			 * Enforce a maximum number of lines per file.
			 * Disabled for comprehensive test suites.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": "off",

			/**
			 * Disallow assigning a value with type any to variables and properties.
			 * Disabled for mock objects and test utilities.
			 *
			 * @see https://typescript-eslint.io/rules/no-unsafe-assignment
			 */
			"@typescript-eslint/no-unsafe-assignment": "off",

			/**
			 * Disallow member access on a value with type any.
			 * Disabled for mock objects.
			 *
			 * @see https://typescript-eslint.io/rules/no-unsafe-member-access
			 */
			"@typescript-eslint/no-unsafe-member-access": "off",

			/**
			 * Disallow calling a value with type any.
			 * Disabled for test utilities like vi.fn().
			 *
			 * @see https://typescript-eslint.io/rules/no-unsafe-call
			 */
			"@typescript-eslint/no-unsafe-call": "off",

			/**
			 * Disallow returning a value with type any from a function.
			 * Disabled for test helper functions.
			 *
			 * @see https://typescript-eslint.io/rules/no-unsafe-return
			 */
			"@typescript-eslint/no-unsafe-return": "off",

			/**
			 * Disallow passing a value with type any to a function parameter.
			 * Disabled for test mock parameters.
			 *
			 * @see https://typescript-eslint.io/rules/no-unsafe-argument
			 */
			"@typescript-eslint/no-unsafe-argument": "off",

			/**
			 * Require unbound methods to be called with correct this context.
			 * Disabled for Vitest expectations like expect(obj.method).toBeCalled().
			 *
			 * @see https://typescript-eslint.io/rules/unbound-method
			 */
			"@typescript-eslint/unbound-method": "off",

			/**
			 * Disallow magic numbers.
			 * Disabled for test assertions with literal values.
			 *
			 * @see https://typescript-eslint.io/rules/no-magic-numbers
			 */
			"@typescript-eslint/no-magic-numbers": "off",

			/**
			 * Require Promise-like statements to be handled appropriately.
			 * Downgraded to warn for test utilities.
			 *
			 * @see https://typescript-eslint.io/rules/no-floating-promises
			 */
			"@typescript-eslint/no-floating-promises": "warn",

			/**
			 * Disallow non-null assertions using the ! postfix operator.
			 * Disabled for tests where values are known to exist.
			 *
			 * @see https://typescript-eslint.io/rules/no-non-null-assertion
			 */
			"@typescript-eslint/no-non-null-assertion": "off",

			/**
			 * Disallow empty functions.
			 * Disabled for test stubs and spies.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-empty-function
			 */
			"no-empty-function": "off",

			/**
			 * Disallow empty functions.
			 * Disabled for test stubs and spies.
			 *
			 * @see https://typescript-eslint.io/rules/no-empty-function
			 */
			"@typescript-eslint/no-empty-function": "off",

			/**
			 * Disallow magic numbers.
			 * Disabled for test assertions.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-magic-numbers
			 */
			"no-magic-numbers": "off",

			/**
			 * Disallow the use of console.
			 * Disabled for test debugging.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console": "off",

			/**
			 * Disallow focused tests.
			 * Prevents .only from being committed.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
			 */
			"vitest/no-focused-tests": "error",

			/**
			 * Disallow disabled tests.
			 * Warns about .skip usage.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
			 */
			"vitest/no-disabled-tests": "warn",

			/**
			 * Enforce lowercase test names.
			 * Consistent test naming convention.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
			 */
			"vitest/prefer-lowercase-title": "warn",

			/**
			 * Enforce a maximum depth for nested describe calls.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
			 */
			"vitest/max-nested-describe": ["error", { max: 5 }],

			/**
			 * Disallow conditional logic in tests.
			 * Tests should be deterministic.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
			 */
			"vitest/no-conditional-in-test": "error",

			/**
			 * Disallow conditional expects.
			 * Expectations should not be inside conditionals.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
			 */
			"vitest/no-conditional-expect": "error",

			/**
			 * Enforce consistent hook ordering.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
			 */
			"vitest/prefer-hooks-in-order": "warn",

			/**
			 * Prefer vi.spyOn over manual mocks.
			 *
			 * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
			 */
			"vitest/prefer-spy-on": "warn",
		},
	},
]);
