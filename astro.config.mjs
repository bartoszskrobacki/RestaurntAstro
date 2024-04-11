import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), solidJs()],
	server: {
		port: 3100
	},
	image: {
		service: squooshImageService()
	},
	output: 'hybrid',
	adapter: node({
		mode: 'standalone'
	})
})
