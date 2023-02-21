import adapter from "@sveltejs/adapter-node";
import path from "path";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// vite: {
		// 	resolve: {
		// 		alias: {
		// 			$lib: path.resolve("./src/lib"),
		// 			$components: path.resolve("./src/components"),
		// 			$routes: path.resolve("./src/routes"),
		// 			$stores: path.resolve("./src/stores"),
		// 			$utils: path.resolve("./src/utils"),
		// 		},
		// 	},
		// },
	},
};

export default config;
