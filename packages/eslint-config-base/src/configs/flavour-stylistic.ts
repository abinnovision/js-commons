/* eslint-disable no-irregular-whitespace */
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

/**
 * ESLint configuration for optional stylistic rules.
 * Enforces consistent code style for comments, spacing, and padding
 * that Prettier does not handle.
 *
 * NOTE: This configuration is meant to be used in conjunction with
 * the base TypeScript ESLint configuration.
 */
export const config = defineConfig([
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		plugins: {
			"@stylistic": stylistic,
		},
		rules: {
			/**
			 * Enforce block comments to use starred-block style (multiline).
			 * Prevents inline block comments like: /** foo *​/
			 *
			 * @see https://eslint.style/rules/default/multiline-comment-style
			 */
			"@stylistic/multiline-comment-style": ["error", "starred-block"],

			/**
			 * Enforce consistent spacing after // or /* delimiters.
			 *
			 * @see https://eslint.style/rules/default/spaced-comment
			 */
			"@stylistic/spaced-comment": ["error", "always"],

			/**
			 * Require a blank line before block and line comments.
			 * Comments belong to the following code block, so only enforce
			 * before, not after.
			 *
			 * Allows comments at the start of blocks, objects, arrays, classes,
			 * interfaces, types, enums, and modules without a preceding blank line.
			 *
			 * @see https://eslint.style/rules/default/lines-around-comment
			 */
			"@stylistic/lines-around-comment": [
				"error",
				{
					beforeBlockComment: true,
					beforeLineComment: true,
					allowBlockStart: true,
					allowObjectStart: true,
					allowArrayStart: true,
					allowClassStart: true,
					allowInterfaceStart: true,
					allowTypeStart: true,
					allowEnumStart: true,
					allowModuleStart: true,
				},
			],

			/**
			 * Enforce line comments to be placed above the code line.
			 *
			 * @see https://eslint.style/rules/default/line-comment-position
			 */
			"@stylistic/line-comment-position": ["error", "above"],

			/**
			 * Require blank lines between specific statement types.
			 * - After block-like statements (if, for, while, try, switch).
			 * - Before return statements.
			 * - After directives ("use strict", etc.).
			 *
			 * @see https://eslint.style/rules/default/padding-line-between-statements
			 */
			"@stylistic/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "block-like", next: "*" },
				{ blankLine: "always", prev: "*", next: "return" },
				{ blankLine: "always", prev: "directive", next: "*" },
			],

			/**
			 * Disallow padding inside blocks.
			 * No empty lines right after { or before }.
			 *
			 * @see https://eslint.style/rules/default/padded-blocks
			 */
			"@stylistic/padded-blocks": ["error", "never"],

			/**
			 * Require blank lines between class members.
			 * Except after single-line members and TypeScript overloads
			 * to keep compact field declarations readable.
			 *
			 * @see https://eslint.style/rules/default/lines-between-class-members
			 */
			"@stylistic/lines-between-class-members": [
				"error",
				"always",
				{
					exceptAfterSingleLine: true,
					exceptAfterOverload: true,
				},
			],

			/**
			 * Limit consecutive empty lines.
			 * Prettier already collapses multiple blank lines within code,
			 * but this additionally prevents blank lines at the start of files.
			 *
			 * @see https://eslint.style/rules/default/no-multiple-empty-lines
			 */
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{ max: 1, maxBOF: 0, maxEOF: 0 },
			],
		},
	},
]);
