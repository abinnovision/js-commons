import { defineConfig } from "eslint/config";

import { base, configFiles } from "./dist/index.js";

export default defineConfig([
	{ extends: [base] },
	{ files: ["*.js"], extends: [configFiles] },
]);
