import { defineConfig } from "eslint/config";

import { base, configFiles, stylistic } from "./dist/index.js";

export default defineConfig([
	{ extends: [base, stylistic] },
	{ files: ["*.js"], extends: [configFiles] },
]);
