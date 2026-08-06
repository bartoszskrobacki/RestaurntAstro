import { type Component, For } from 'solid-js'
import { MenuItem } from '@components/foodMenu/FoodMenuItem'
import type { FoodCategorie } from './FoodMenu.astro'

type Props = {
	items: FoodCategorie[]
	heading?: string
}

const slug = (name: string) =>
	name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/ł/g, 'l')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')

export const MainMenuFood: Component<Props> = (props) => {
	const categories = () => props.items ?? []

	return (
		<div class="mx-auto flex max-w-4xl scroll-my-16 flex-col items-center py-16">
			<h2 class="mb-0">{props.heading ?? 'Menu'}</h2>
			<span class="mb-8 text-primary-200">Do zestawu obiadowego zupa za 8,90zł!</span>

			<nav
				aria-label="Kategorie menu"
				class="mb-10 flex flex-col items-center gap-4 font-light text-primary-900 md:flex-row md:gap-16"
			>
				<For each={categories()}>
					{(category) => (
						<a href={`#${slug(category.fields.name)}`}>{category.fields.name?.toUpperCase()}</a>
					)}
				</For>
			</nav>

			<For each={categories()}>
				{(foodCategory) => (
					<section id={slug(foodCategory.fields.name)} class="mb-12 w-full scroll-mt-24">
						<h3 class="mb-6 text-center">{foodCategory.fields.name}</h3>
						<div class="grid w-full grid-flow-row grid-cols-1 gap-8 md:w-auto md:grid-cols-2">
							<For each={foodCategory?.fields.listOfMeals}>
								{(foodItem) => <MenuItem foodMenuItem={foodItem} />}
							</For>
						</div>
					</section>
				)}
			</For>
		</div>
	)
}
