/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [
	...require("./dist/index.js"),
	...require("@abinnovision/eslint-config-typescript"),
	{ files: ["**/*.js"], languageOptions: { globals: require("globals").node } },
];
