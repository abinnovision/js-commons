import * as ConventionalConfig from "@commitlint/config-conventional";

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
	},
};

export = config;
