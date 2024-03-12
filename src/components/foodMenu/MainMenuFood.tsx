import { createSignal, type Component, For, createEffect, Show } from 'solid-js'
import { MenuItem } from '@components/foodMenu/FoodMenuItem'
import foodMenu from '@config/foodMenu.json'
import type { FoodCategorie } from './FoodMenu.astro'

type Props = {
	items: FoodCategorie[]
}

export const MainMenuFood: Component<Props> = ({ items }) => {
	const [activeCategory, setActiveCategory] = createSignal(items ? items[0].fields.name : undefined)

	return (
		<div class="mx-auto mb-32 min-h-[250px] max-w-4xl">
			<h1>Menu</h1>
			<div class="mb-6 flex justify-around gap-8 font-light">
				<For each={items}>
					{(categorie) => (
						<div
							class={activeCategory() === categorie.fields.name ? 'font-black underline' : ''}
							onClick={() => setActiveCategory(categorie.fields.name)}
						>
							{categorie?.fields?.name?.toUpperCase()}
						</div>
					)}
				</For>
			</div>
			<For each={items}>
				{(foodCategory) => (
					<Show when={foodCategory.fields?.name === activeCategory()}>
						<div class="mb-4 grid grid-flow-row grid-cols-3 gap-8">
							<For each={foodCategory?.fields.listOfMeals}>
								{(foodItem) => <MenuItem foodMenuItem={foodItem} />}
							</For>
						</div>
					</Show>
				)}
			</For>
		</div>
	)
}
