// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), mdx(), sitemap()],
	adapter: deno(),
	prefetch: {
		prefetchAll: true,
	},
});
