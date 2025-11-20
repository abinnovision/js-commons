import jseslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

/**
 * Base ESLint Configuration
 */
export const config = defineConfig([
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
		},
		plugins: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			import: eslintPluginImport,
			uimports: unusedImports,
		},
		extends: [
			/**
			 * ESLint Recommended Rules
			 *
			 * @see https://eslint.org/docs/latest/rules/
			 */
			jseslint.configs.recommended,
		],
		rules: {
			/**
			 * Enforce getter/setter pairs in objects and classes.
			 *
			 * @see https://eslint.org/docs/latest/rules/accessor-pairs
			 */
			"accessor-pairs": [
				"error",
				{ setWithoutGet: true, getWithoutSet: false },
			],

			/**
			 * Enforce return statements in callbacks of array methods.
			 *
			 * @see https://eslint.org/docs/latest/rules/array-callback-return
			 */
			"array-callback-return": "error",

			/**
			 * Disallow Array constructor.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-array-constructor
			 */
			"no-array-constructor": "error",

			/**
			 * Disallow use of arguments.caller or arguments.callee.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-caller
			 */
			"no-caller": "error",

			/**
			 * Enforce default clauses in switch statements to be last.
			 *
			 * @see https://eslint.org/docs/latest/rules/default-case-last
			 */
			"default-case-last": "error",

			/**
			 * Require following curly brace conventions.
			 *
			 * @see https://eslint.org/docs/latest/rules/curly
			 */
			curly: ["error", "all"],

			/**
			 * Require === and !==.
			 *
			 * @see https://eslint.org/docs/latest/rules/eqeqeq
			 */
			eqeqeq: ["error", "always"],

			/**
			 * Disallow eval().
			 *
			 * @see https://eslint.org/docs/latest/rules/no-eval
			 */
			"no-eval": "error",

			/**
			 * Disallow extending native types.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-extend-native
			 */
			"no-extend-native": "error",

			/**
			 * Disallow unnecessary function binding.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-extra-bind
			 */
			"no-extra-bind": "error",

			/**
			 * Disallow leading or trailing decimal points in numeric literals.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-floating-decimal
			 */
			"no-floating-decimal": "error",

			/**
			 * Disallow assignment operators in return statements.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-return-assign
			 */
			"no-return-assign": "error",

			/**
			 * Disallow new operators outside of assignments or comparisons.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-new
			 */
			"no-new": "error",

			/**
			 * Disallow new operators with Function object.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-new-func
			 */
			"no-new-func": "error",

			/**
			 * Disallow new operators with Symbol object.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-new-symbol
			 */
			"no-new-symbol": "error",

			/**
			 * Disallow new operators with String, Number, and Boolean objects.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-new-wrappers
			 */
			"no-new-wrappers": "error",

			/**
			 * Disallow octal escape sequences in string literals.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-octal-escape
			 */
			"no-octal-escape": "error",

			/**
			 * Disallow variable redeclaration.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-redeclare
			 */
			"no-redeclare": "error",

			/**
			 * Disallow comparisons where both sides are exactly the same.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-self-compare
			 */
			"no-self-compare": "error",

			/**
			 * Disallow comma operators.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-sequences
			 */
			"no-sequences": "error",

			/**
			 * Disallow throwing literals as exceptions.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-throw-literal
			 */
			"no-throw-literal": "error",

			/**
			 * Disallow loops with a body that allows only one iteration.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
			 */
			"no-unreachable-loop": "error",

			/**
			 * Disallow redundant return statements.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-useless-return
			 */
			"no-useless-return": "error",

			/**
			 * Require var declarations be placed at the top of their scope.
			 *
			 * @see https://eslint.org/docs/latest/rules/vars-on-top
			 */
			"vars-on-top": "error",

			/**
			 * Require let or const instead of var.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-var
			 */
			"no-var": "error",

			/**
			 * Require const declarations for variables that are never reassigned.
			 *
			 * @see https://eslint.org/docs/latest/rules/prefer-const
			 */
			"prefer-const": "error",

			/**
			 * Require object spread over Object.assign.
			 *
			 * @see https://eslint.org/docs/latest/rules/prefer-object-spread
			 */
			"prefer-object-spread": "error",

			/**
			 * Require rest parameters instead of arguments.
			 *
			 * @see https://eslint.org/docs/latest/rules/prefer-rest-params
			 */
			"prefer-rest-params": "error",

			/**
			 * Require spread operators instead of .apply().
			 *
			 * @see https://eslint.org/docs/latest/rules/prefer-spread
			 */
			"prefer-spread": "error",

			/**
			 * Custom JS Rules: Code Quality & Complexity
			 */

			/**
			 * Enforce a maximum cyclomatic complexity allowed in a program.
			 *
			 * @see https://eslint.org/docs/latest/rules/complexity
			 */
			complexity: ["error", { max: 25 }],

			/**
			 * Enforce a maximum depth that blocks can be nested.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-depth
			 */
			"max-depth": ["error", 5],

			/**
			 * Enforce a maximum depth that callbacks can be nested.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
			 */
			"max-nested-callbacks": ["error", 3],

			/**
			 * Enforce a maximum number of parameters in function definitions.
			 *
			 * @see https://eslint.org/docs/latest/rules/max-params
			 */
			"max-params": ["error", 3],

			/**
			 * Require for-in loops to include an if statement.
			 *
			 * @see https://eslint.org/docs/latest/rules/guard-for-in
			 */
			"guard-for-in": "error",

			/**
			 * Require grouped accessor pairs in object literals and classes.
			 *
			 * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
			 */
			"grouped-accessor-pairs": "error",

			/**
			 * Require constructor names to begin with a capital letter.
			 *
			 * @see https://eslint.org/docs/latest/rules/new-cap
			 */
			"new-cap": [
				"error",
				{
					newIsCap: true,
					capIsNew: false,
					properties: true,
				},
			],

			/**
			 * Disallow returning value from constructor.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-constructor-return
			 */
			"no-constructor-return": "error",

			/**
			 * Disallow variable or function declarations in nested blocks.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-inner-declarations
			 */
			"no-inner-declarations": "error",

			/**
			 * Disallow mixed binary operators without parentheses.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-mixed-operators
			 */
			"no-mixed-operators": "error",

			/**
			 * Disallow the use of console.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console": "warn",

			/**
			 * Custom Configuration Adjustments
			 * Override ESLint recommended rules where we want different behavior
			 */

			/**
			 * Disallow assignment operators in conditional expressions except when enclosed in parentheses.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-cond-assign
			 */
			"no-cond-assign": ["error", "except-parens"],

			/**
			 * Disallow constant expressions in conditions except loops.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-constant-condition
			 */
			"no-constant-condition": ["error", { checkLoops: false }],

			/**
			 * Disallow empty block statements except catch blocks.
			 *
			 * @see https://eslint.org/docs/latest/rules/no-empty
			 */
			"no-empty": ["error", { allowEmptyCatch: true }],

			/**
			 * Import Ordering and Organization
			 * Enforces consistent import structure
			 */

			/**
			 * Enforce a convention in module import order.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
			 */
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

			/**
			 * Require exports to be placed at the end of the file.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
			 */
			"import/exports-last": "warn",

			/**
			 * Require imports to be placed before other statements.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
			 */
			"import/first": "error",

			/**
			 * Require a newline after import statements.
			 *
			 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
			 */
			"import/newline-after-import": "error",

			/**
			 * Unused Imports Handling
			 * Uses unused-imports plugin for better detection
			 */

			/**
			 * Disables base no-unused-vars (replaced by unused-imports).
			 */
			"no-unused-vars": "off",

			/**
			 * Disallow unused imports.
			 *
			 * @see https://github.com/sweepline/eslint-plugin-unused-imports
			 */
			"uimports/no-unused-imports": "error",

			/**
			 * Disallow unused variables.
			 *
			 * @see https://github.com/sweepline/eslint-plugin-unused-imports
			 */
			"uimports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},
	{
		/**
		 * TypeScript-Specific Configuration
		 */
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		extends: [
			/**
			 * TypeScript ESLint Recommended Rules
			 *
			 * @see https://typescript-eslint.io/rules
			 */
			tseslint.configs.strictTypeChecked,
		],
		rules: {
			/**
			 * Allow explicit any for flexibility.
			 *
			 * @see https://typescript-eslint.io/rules/no-explicit-any
			 */
			"@typescript-eslint/no-explicit-any": "off",

			/**
			 * Allow non-null assertions.
			 *
			 * @see https://typescript-eslint.io/rules/no-non-null-assertion
			 */
			"@typescript-eslint/no-non-null-assertion": "warn",

			/**
			 * Require Promise-like statements to be handled appropriately.
			 *
			 * @see https://typescript-eslint.io/rules/no-floating-promises
			 */
			"@typescript-eslint/no-floating-promises": "error",

			/**
			 * Require explicit accessibility modifiers on class properties and methods.
			 *
			 * @see https://typescript-eslint.io/rules/explicit-member-accessibility
			 */
			"@typescript-eslint/explicit-member-accessibility": "error",

			/**
			 * Require a consistent member declaration order.
			 *
			 * @see https://typescript-eslint.io/rules/member-ordering
			 */
			"@typescript-eslint/member-ordering": [
				"error",
				{
					default: [
						// Fields
						"public-static-field",
						"protected-static-field",
						"private-static-field",
						"public-instance-field",
						"protected-instance-field",
						"private-instance-field",

						// Constructors
						"public-constructor",
						"protected-constructor",
						"private-constructor",

						// Methods
						"public-static-method",
						"protected-static-method",
						"private-static-method",
						"public-instance-method",
						"protected-instance-method",
						"private-instance-method",
					],
				},
			],

			/**
			 * Enforce using a particular method signature syntax.
			 *
			 * @see https://typescript-eslint.io/rules/method-signature-style
			 */
			"@typescript-eslint/method-signature-style": "error",

			/**
			 * Enforce consistent usage of type assertions.
			 *
			 * @see https://typescript-eslint.io/rules/consistent-type-assertions
			 */
			"@typescript-eslint/consistent-type-assertions": [
				"error",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "never",
				},
			],

			/**
			 * Enforce type definitions to consistently use interface or type.
			 *
			 * @see https://typescript-eslint.io/rules/consistent-type-definitions
			 */
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],

			/**
			 * Enforce consistent usage of type imports.
			 *
			 * @see https://typescript-eslint.io/rules/consistent-type-imports
			 */
			"@typescript-eslint/consistent-type-imports": "error",

			/**
			 * Disallow type imports with side effects.
			 *
			 * @see https://typescript-eslint.io/rules/no-import-type-side-effects
			 */
			"@typescript-eslint/no-import-type-side-effects": "error",

			/**
			 * Require using for-of loops instead of standard for loops over arrays.
			 *
			 * @see https://typescript-eslint.io/rules/prefer-for-of
			 */
			"@typescript-eslint/prefer-for-of": "warn",

			/**
			 * Require using function types instead of interfaces with call signatures.
			 *
			 * @see https://typescript-eslint.io/rules/prefer-function-type
			 */
			"@typescript-eslint/prefer-function-type": "error",

			/**
			 * Require using nullish coalescing operator instead of logical OR.
			 *
			 * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
			 */
			"@typescript-eslint/prefer-nullish-coalescing": "error",

			/**
			 * Custom Overrides for TypeScript Rules
			 */

			/**
			 * Disallow TypeScript namespaces except in declarations and definition files.
			 *
			 * @see https://typescript-eslint.io/rules/no-namespace
			 */
			"@typescript-eslint/no-namespace": [
				"error",
				{
					allowDeclarations: true,
					allowDefinitionFiles: true,
				},
			],

			/**
			 * Require awaiting a value before returning it from an async function.
			 *
			 * @see https://typescript-eslint.io/rules/return-await
			 */
			"@typescript-eslint/return-await": ["warn", "always"],

			/**
			 * Disable TypeScript no-unused-vars (using unused-imports plugin).
			 */
			"@typescript-eslint/no-unused-vars": "off",

			/**
			 * Disallow classes used as namespaces except when used with decorators.
			 *
			 * @see https://typescript-eslint.io/rules/no-extraneous-class
			 */
			"@typescript-eslint/no-extraneous-class": [
				"error",
				{
					allowWithDecorator: true,
				},
			],
		},
	},
]);
