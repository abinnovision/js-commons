import eslintReactPlugin from "@eslint-react/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintReactHooks from "eslint-plugin-react-hooks";

// Extract the plugin object due to type issues.
const { configs: _, ...eslintReactHooksPlugin } = eslintReactHooks;

export const config = defineConfig([
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"react-hooks": eslintReactHooksPlugin,
		},
		languageOptions: {
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		extends: [
			/**
			 * ESLint React Recommended Configuration.
			 * Includes x (renderer-agnostic), dom, and web-api rules.
			 *
			 * @see https://eslint-react.xyz/docs/configuration
			 */
			eslintReactPlugin.configs.recommended,
		],
		rules: {
			/**
			 * Enforce Rules of Hooks.
			 *
			 * @see https://react.dev/reference/react/hooks#rules-of-hooks
			 */
			"react-hooks/rules-of-hooks": "error",

			/**
			 * Verify dependencies array in hooks.
			 *
			 * @see https://react.dev/reference/react/hooks#rules-of-hooks
			 */
			"react-hooks/exhaustive-deps": "warn",

			/**
			 * Disallow dangerouslySetInnerHTML.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
			 */
			"@eslint-react/dom/no-dangerously-set-innerhtml": "error",

			/**
			 * Disallow dangerouslySetInnerHTML with children.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
			 */
			"@eslint-react/dom/no-dangerously-set-innerhtml-with-children": "error",

			/**
			 * Disallow javascript: URLs.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
			 */
			"@eslint-react/dom/no-script-url": "error",

			/**
			 * Enforce security attributes on target="_blank" links.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
			 */
			"@eslint-react/dom/no-unsafe-target-blank": "error",

			/**
			 * Require sandbox attribute on iframes.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
			 */
			"@eslint-react/dom/no-missing-iframe-sandbox": "error",

			/**
			 * Disallow unsafe iframe sandbox values.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
			 */
			"@eslint-react/dom/no-unsafe-iframe-sandbox": "error",

			/**
			 * Prevent memory leaks from event listeners.
			 *
			 * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
			 */
			"@eslint-react/web-api/no-leaked-event-listener": "error",

			/**
			 * Prevent memory leaks from intervals.
			 *
			 * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
			 */
			"@eslint-react/web-api/no-leaked-interval": "error",

			/**
			 * Prevent memory leaks from timeouts.
			 *
			 * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
			 */
			"@eslint-react/web-api/no-leaked-timeout": "error",

			/**
			 * Prevent memory leaks from resize observers.
			 *
			 * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
			 */
			"@eslint-react/web-api/no-leaked-resize-observer": "error",

			/**
			 * Warn against using array indices as keys.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-array-index-key
			 */
			"@eslint-react/no-array-index-key": "warn",

			/**
			 * Prevent unstable nested component definitions.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
			 */
			"@eslint-react/no-nested-component-definitions": "error",

			/**
			 * Warn against unstable context values.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
			 */
			"@eslint-react/no-unstable-context-value": "warn",

			/**
			 * Warn against unnecessary useCallback.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
			 */
			"@eslint-react/no-unnecessary-use-callback": "warn",

			/**
			 * Warn against unnecessary useMemo.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
			 */
			"@eslint-react/no-unnecessary-use-memo": "warn",

			/**
			 * Disallow duplicate props in JSX.
			 *
			 * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
			 */
			"@eslint-react/jsx-no-duplicate-props": "error",

			/**
			 * Disallow undefined components in JSX.
			 *
			 * @see https://eslint-react.xyz/docs/rules/jsx-no-undef
			 */
			"@eslint-react/jsx-no-undef": "error",

			/**
			 * Require keys for array elements.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-missing-key
			 */
			"@eslint-react/no-missing-key": "error",

			/**
			 * Disallow children prop.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-children-prop
			 */
			"@eslint-react/no-children-prop": "error",

			/**
			 * Disallow direct state mutation.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
			 */
			"@eslint-react/no-direct-mutation-state": "error",

			/**
			 * Disallow string refs.
			 *
			 * @see https://eslint-react.xyz/docs/rules/no-string-refs
			 */
			"@eslint-react/no-string-refs": "error",

			/**
			 * Disallow findDOMNode.
			 *
			 * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
			 */
			"@eslint-react/dom/no-find-dom-node": "error",
		},
	},
]);
