/** @type {import("@types/eslint").Linter.FlatConfig[]} */
module.exports = [
	...require("@abinnovision/eslint-config-base/dist/index"),
	...require("./dist/index.js"),
	{ files: ["**/*.js"], languageOptions: { globals: require("globals").node } },
];
