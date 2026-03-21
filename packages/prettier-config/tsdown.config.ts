import { defineConfig } from "tsdown";

export default defineConfig({
	attw: true,
	publint: true,
	unbundle: true,
	entry: ["src/index.ts", "src/bin/sync-editorconfig.ts"],
	format: ["cjs", "esm"],
	clean: true,
	deps: { skipNodeModulesBundle: true },
});
