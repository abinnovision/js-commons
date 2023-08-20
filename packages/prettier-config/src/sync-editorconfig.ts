#!/usr/bin/env node
import * as fs from "fs/promises";
import * as path from "path";
import * as process from "process";

const DISABLE_ENV_VAR = "DISABLE_SYNC_EDITORCONFIG";

(async function () {
	// Check if the sync has been explicitly disabled by the env var.
	if ([true, "true"].includes(process.env[DISABLE_ENV_VAR] ?? false)) {
		return;
	}

	// Just override the configuration for now.
	await fs.copyFile(
		path.resolve(__dirname, "../assets/.editorconfig"),
		path.resolve(process.cwd(), ".editorconfig")
	);
})();
