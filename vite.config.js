import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inlineCssModules from "vite-plugin-inline-css-modules";
import * as FS from "fs";

// import paths from tsconfig
const alias = {};
const tsConfig = JSON.parse(FS.readFileSync(__dirname + "/tsconfig.json"));
for (const [pathKey, paths] of Object.entries(tsConfig.compilerOptions.paths)) {
	let key = pathKey.replace("/*", "");
	if (!key) continue;
	let path = paths[0];
	if (!path) continue;
	alias[key] = __dirname + "/src/" + path.replace("/*", "");
}
console.log(JSON.stringify(alias));

export default defineConfig({
	plugins: [
		react(),
		inlineCssModules()
	],
	resolve: {
		alias
	}
});
