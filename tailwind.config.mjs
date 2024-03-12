/** @type {import('tailwindcss').Config} */
import { opacityColor } from './src/lib/colors'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: opacityColor('primary'),
				'primary-100': opacityColor('primary-100'),
				'primary-200': opacityColor('primary-200'),
				'primary-300': opacityColor('primary-300'),
				'primary-400': opacityColor('primary-400'),
				'primary-500': opacityColor('primary-500'),
				'primary-600': opacityColor('primary-600'),
				'primary-700': opacityColor('primary-700'),
				'primary-800': opacityColor('primary-800'),
				'primary-900': opacityColor('primary-900'),
				secondary: opacityColor('secondary'),
				'secondary-100': opacityColor('secondary-100'),
				'secondary-200': opacityColor('secondary-200'),
				'secondary-300': opacityColor('secondary-300'),
				'secondary-400': opacityColor('secondary-400'),
				'secondary-500': opacityColor('secondary-500'),
				'secondary-600': opacityColor('secondary-600'),
				'secondary-700': opacityColor('secondary-700'),
				'secondary-800': opacityColor('secondary-800'),
				'secondary-900': opacityColor('secondary-900'),
				'accents-000': opacityColor('accents-000'),
				'accents-050': opacityColor('accents-050'),
				'accents-100': opacityColor('accents-100'),
				'accents-150': opacityColor('accents-150'),
				'accents-200': opacityColor('accents-200'),
				'accents-250': opacityColor('accents-250'),
				'accents-300': opacityColor('accents-300'),
				'accents-350': opacityColor('accents-350'),
				'accents-400': opacityColor('accents-400'),
				'accents-450': opacityColor('accents-450'),
				'accents-500': opacityColor('accents-500'),
				'accents-550': opacityColor('accents-550'),
				'accents-600': opacityColor('accents-600'),
				'accents-650': opacityColor('accents-650'),
				'accents-700': opacityColor('accents-700'),
				'accents-750': opacityColor('accents-750'),
				'accents-800': opacityColor('accents-800'),
				'accents-850': opacityColor('accents-850'),
				'accents-900': opacityColor('accents-900'),
				'accents-950': opacityColor('accents-950')
			}
		}
	},
	plugins: []
}
