import * as ConventionalConfig from "@commitlint/config-conventional";

import type { UserConfig } from "@commitlint/types";

/**
 * The config is mostly based on the Conventional config.
 * Some limits have been increased to make them work with some tooling (e.g. Dependabot).
 */
const config: UserConfig = {
	...ConventionalConfig,
	rules: {
		...ConventionalConfig.rules,
		"body-max-line-length": [2, "always", 200],
	},
};

export = config;
