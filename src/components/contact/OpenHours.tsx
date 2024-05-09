import { type Component } from 'solid-js'

type Props = {}

export const OpenHours: Component<Props> = () => {
	return (
		<div class="mb-6 text-center text-primary-200">
			<h2 class="text-base">Zapraszamy codziennie w godzinach: </h2>

			<p class="mx-16 flex flex-col px-8 ">
				<span>Poniedziałek - Piątek 10.00-18.00</span>
				<span>Sobota 10.00-17.00</span>
				<span>Niedziela 11.00-16.00</span>
			</p>
		</div>
	)
}
