import { type Component } from 'solid-js'
import type { FoodMenuItem } from './FoodMenu.astro'

type Props = {
	foodMenuItem: FoodMenuItem
}

export const MenuItem: Component<Props> = ({ foodMenuItem }) => {
	return (
		<div class="relative flex min-h-[3rem] w-full flex-col items-center">
			<h3 class="mt-4 uppercase">{foodMenuItem?.fields.name}</h3>
			<span class="min-h-[1rem] text-xs">{foodMenuItem?.fields.description}</span>
			<span>{foodMenuItem.fields.price.toFixed(2)}zł</span>
			<span class="dots"></span>
		</div>
	)
}
