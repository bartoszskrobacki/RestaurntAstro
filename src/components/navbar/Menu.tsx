import { type Component } from 'solid-js'

import menu from '@config/menu.json'

export interface NavigationLink {
	name: string
	url: string
}

type Props = {}

const { main }: { main: NavigationLink[] } = menu

export const Menu: Component<Props> = () => {
	const scrollIntoView = (id: string) => {
		document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<ul class="flex cursor-pointer justify-center gap-5 font-bold">
			{main.map((menuItem) => (
				<li onClick={() => scrollIntoView(menuItem.url)}>{menuItem.name.toUpperCase()}</li>
			))}
		</ul>
	)
}
