declare module "eslint-config-alloy/react.js" {
	import { Linter } from "eslint";

	import BaseConfig = Linter.BaseConfig;

	const config: Partial<BaseConfig<any>>;
	export = config;
}

declare module "eslint-plugin-react" {
	import { Linter } from "eslint";

	import Plugin = Linter.Plugin;

	const plugin: Plugin;
	export = plugin;
}

declare module "eslint-plugin-react-hooks" {
	import { Linter } from "eslint";

	import Plugin = Linter.Plugin;

	const plugin: Plugin;
	export = plugin;
}
