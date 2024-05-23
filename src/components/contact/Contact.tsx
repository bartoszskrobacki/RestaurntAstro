import { type Component } from 'solid-js'
import { OpenHours } from './OpenHours'
import { ContactForm } from './ContactForm'

type Props = {}

export const Contact: Component<Props> = ({}) => {
	return (
		<div class="mx-auto mt-20 flex max-w-7xl p-7 ">
			<div class="w-full">
				<h1 class="text-center">Skontaktuj się z nami! </h1>
				<OpenHours />
				<div class="my-6 flex w-full flex-col justify-center md:my-10 md:flex-row">
					<div class="flex w-full flex-col pr-10 md:w-auto md:pt-14">
						<div class="flex flex-col py-3">
							<h2 class="text-base">Telefon</h2>
							<ul>
								<li>
									<a href="tel:32 232 24 02">32 232 24 02</a>
								</li>
								<li>
									<a href="tel:570 100 110">570 100 110</a>
								</li>
							</ul>
						</div>
						<div class="py-3 ">
							<h2 class="text-base">Adres</h2>
							<span>Zwycięsta 31 Gliwice</span>
						</div>

						<div class="py-3 ">
							<h2 class="text-base">Email</h2>
							<span>info@goscinna.gliwice.pl</span>
						</div>
					</div>
					<ContactForm />
					{/* <GoogleMap /> */}
				</div>
			</div>
		</div>
	)
}
