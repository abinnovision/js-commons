declare module "eslint-config-alloy/typescript" {
	import { Linter } from "eslint";

	import BaseConfig = Linter.BaseConfig;
	const config: Partial<BaseConfig<any>>;
	export = config;
}
