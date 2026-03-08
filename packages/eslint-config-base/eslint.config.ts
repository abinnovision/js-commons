import { defineConfig } from "eslint/config";

import { base, configFiles, stylistic } from "./src/configs/index.js";

export default defineConfig([
	{ extends: [base, stylistic] },
	{ files: ["*.ts"], extends: [configFiles] },
]);
