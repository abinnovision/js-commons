import ConventionalConfig from "@commitlint/config-conventional";

import type { UserConfig } from "@commitlint/types";

/**
 * The config is mostly based on the Conventional config.
 */
const config: UserConfig = {
	...ConventionalConfig,
	rules: {
		...ConventionalConfig.rules,

		/**
		 * Disable the rule to limit the body line length.
		 * This is because sometimes commit messages can contain structured data
		 * by some kind of tool (e.g. Dependabot), which can't be changed.
		 */
		"body-max-line-length": [0],

		/**
		 * Add "deps" to the list of allowed commit types.
		 * This allows us to support the case where release-please should
		 * create releases for dependabot updates.
		 */
		"type-enum": [
			2,
			"always",
			[
				"build",
				"chore",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
				"deps",
			],
		],
	},
};

export = config;
