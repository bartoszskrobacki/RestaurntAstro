import { type Component } from 'solid-js'
import { OpenHours } from './OpenHours'
import { ContactForm } from './ContactForm'
import { BUSINESS, ADDRESS_LINE, telHref } from '@config/business'

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
								{BUSINESS.phones.map((phone) => (
									<li>
										<a href={telHref(phone)}>{phone}</a>
									</li>
								))}
							</ul>
						</div>
						<div class="py-3 ">
							<h2 class="text-base">Adres</h2>
							<span>{ADDRESS_LINE}</span>
						</div>

						<div class="py-3 ">
							<h2 class="text-base">Email</h2>
							<a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
						</div>
					</div>
					<ContactForm />
					{/* <GoogleMap /> */}
				</div>
			</div>
		</div>
	)
}
