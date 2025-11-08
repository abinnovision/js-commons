import { base, configFiles } from "@abinnovision/eslint-config-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{ extends: [base] },
	{ files: ["*.js"], extends: [configFiles] },
]);
