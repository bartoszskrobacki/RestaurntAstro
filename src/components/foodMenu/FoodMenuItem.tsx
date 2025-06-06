import { type Component } from 'solid-js'
import type { FoodMenuItem } from './FoodMenu.astro'

type Props = {
	foodMenuItem: FoodMenuItem
}

export const MenuItem: Component<Props> = ({ foodMenuItem }) => {
	return (
		<div class="relative flex min-h-[3rem] flex-col items-center md:w-72">
			<h3 class="mt-4 text-sm uppercase">{foodMenuItem?.fields?.name}</h3>
			<span class="min-h-[1rem] text-xs text-primary-200">{foodMenuItem?.fields?.description}</span>
			<span class="mb-1 text-xs">{foodMenuItem.fields?.price.toFixed(2)}zł</span>
			<span class="dots"></span>
		</div>
	)
}
