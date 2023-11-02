/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [
	...require("@abinnovision/eslint-config-base/dist/index"),
	...require("@abinnovision/eslint-config-typescript/dist/index"),
	{ files: ["**/*.js"], languageOptions: { globals: require("globals").node } },
];
