import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [devtoolsJson(), reactRouter(), tsconfigPaths(), netlifyPlugin()],
});
