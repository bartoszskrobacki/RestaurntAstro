import { createSignal, type Component, For, createEffect, Show } from 'solid-js'
import { MenuItem } from '@components/foodMenu/FoodMenuItem'
import type { FoodCategorie } from './FoodMenu.astro'

type Props = {
	items: FoodCategorie[]
}

export const MainMenuFood: Component<Props> = (props) => {
	const [activeCategory, setActiveCategory] = createSignal(
		props.items ? props.items[0].fields.name : undefined
	)

	return (
		<div
			id="menu"
			class="mx-auto mb-32 flex min-h-[250px] max-w-4xl scroll-my-16 flex-col items-center justify-center"
		>
			<div class="ribbon mb-6">
				<h6 class=" text-sm leading-6 text-primary">Menu</h6>{' '}
			</div>
			<div class="mb-6 flex cursor-pointer flex-col items-center justify-around font-light  text-primary-100 md:flex-row md:gap-8">
				<For each={props.items}>
					{(categorie) => (
						<div onClick={() => setActiveCategory(categorie.fields.name)}>
							<span
								class={
									activeCategory() === categorie.fields.name
										? 'font-black text-primary-900 underline'
										: ''
								}
							>
								{' '}
								{categorie?.fields?.name?.toUpperCase()}
							</span>
						</div>
					)}
				</For>
			</div>
			<For each={props.items}>
				{(foodCategory) => (
					<Show when={foodCategory.fields?.name === activeCategory()}>
						<div class="mb-4 grid  grid-flow-row grid-cols-1 gap-8 md:grid-cols-2">
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
