import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://obiady-gliwice.pl',
		integrations: [
		tailwind(),
		solidJs(),
		sitemap({
			filter: (page) => !page.includes('/cele')
		})
	],
	server: {
		port: 3100
	},
	image: {
		service: passthroughImageService()
	},
	output: 'static'
})
