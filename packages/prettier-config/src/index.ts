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
	],
};

export default config;
