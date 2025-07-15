import type { Linter } from "eslint";

/**
 * Defines a config object. This is just a type-safe wrapper around the ESLint config type.
 *
 * @param config Config object.
 * @returns Config object.
 */
export const defineConfig = (config: Linter.Config): Linter.Config => config;
