import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inlineCssModules from "vite-plugin-inline-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		inlineCssModules()
	],
})
