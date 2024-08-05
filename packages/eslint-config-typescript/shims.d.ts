declare module "eslint-config-alloy/typescript.js" {
	import { Linter } from "eslint";

	import BaseConfig = Linter.BaseConfig;
	const config: Partial<BaseConfig<any>>;
	export = config;
}
