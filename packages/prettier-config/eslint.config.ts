// @boundaries-ignore due to cyclic dependency
import { base, configFiles, stylistic } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{ extends: [base, stylistic] },
	{ files: ["*.ts"], extends: [configFiles] },
]);
