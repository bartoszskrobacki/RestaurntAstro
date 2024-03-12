import { type Component } from 'solid-js'
import type { FoodMenuItem } from './FoodMenu.astro'

type Props = {
	foodMenuItem: FoodMenuItem
}

export const MenuItem: Component<Props> = ({ foodMenuItem }) => {
	return (
		<div class="flex min-h-[3rem] max-w-[22rem] justify-between border-b-2">
			<div class="flex flex-col justify-between text-lg">
				<h3>{foodMenuItem?.fields.name}</h3>
				<span class="text-xs">{foodMenuItem?.fields.description}</span>
			</div>
			<span>{foodMenuItem.fields.price.toFixed(2)}</span>
		</div>
	)
}
