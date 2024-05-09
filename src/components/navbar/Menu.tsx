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
		<ul class="flex min-h-8 cursor-pointer justify-center gap-5   py-4 text-xs font-bold">
			{main.map((menuItem) => (
				<li onClick={() => scrollIntoView(menuItem.url)}>
					<a href={menuItem.url}>{menuItem.name}</a>
				</li>
			))}
		</ul>
	)
}
