import { createSignal, type Component, For, createEffect, Show } from 'solid-js'
import { MenuItem } from '@components/foodMenu/FoodMenuItem'
import type { FoodCategorie } from './FoodMenu.astro'

type Props = {
	items: FoodCategorie[]
}

export const MainMenuFood: Component<Props> = (props) => {
	const [activeCategory, setActiveCategory] = createSignal(
		props.items ? props.items[3].fields.name : undefined
	)

	return (
		<div class="mx-auto flex min-h-[250px] max-w-4xl scroll-my-16 flex-col items-center justify-center py-16">
			<h1 class="mb-0">MENU</h1>
			<span class="mb-8 text-primary-200">Do zestawu obiadowego zupa za 7,90zł!</span>
			<div class="mb-6 flex cursor-pointer flex-col items-center justify-between gap-4 font-light  text-primary-900 md:flex-row md:gap-16">
				<For each={props.items}>
					{(categorie) => (
						<span
							onClick={() => setActiveCategory(categorie.fields.name)}
							class={
								activeCategory() === categorie.fields.name
									? 'font-black text-primary-900 underline'
									: ''
							}
						>
							{categorie?.fields?.name?.toUpperCase()}
						</span>
					)}
				</For>
			</div>
			<For each={props.items}>
				{(foodCategory) => (
					<Show when={foodCategory.fields?.name === activeCategory()}>
						<div class="mb-4 grid w-full grid-flow-row grid-cols-1 gap-8 md:w-auto md:grid-cols-2">
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
