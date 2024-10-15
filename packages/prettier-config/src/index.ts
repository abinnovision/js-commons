import type { Config } from "prettier";

const config: Config = {
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	semi: true,
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "always",
	endOfLine: "lf",
	overrides: [
		{
			files: ["pnpm-lock.yaml"],
			options: {
				requirePragma: true,
			},
		},
		{
			/**
			 * Use spaces for Markdown files instead of tabs.
			 *
			 * This is because Markdown files rendered with tabs in GitHub use pretty
			 * large indentation, which is not ideal.
			 */
			files: ["*.md"],
			options: {
				useTabs: false,
			},
		},
	],
};

export default config;
