import { type Component } from 'solid-js'
import Button from '@components/primitives/Button'
import emailjs from '@emailjs/browser'

type Props = {}

export const Contact: Component<Props> = ({}) => {
	const EMAIL_JS = import.meta.env.EMAIL_JS_PUBLIC_KEY
	emailjs.init(EMAIL_JS)
	const params = {
		from_name: 'bartek',
		message: 'Dzien dobry witam serdecznie',
		to_name: 'artek'
	}
	const serviceID = 'default_service'
	const template_id = 'template_27tv6nd'

	const sendEmail = () => {
		console.log('sent')
		// emailjs.send(serviceID, template_id, params, 'FWLm0n59VFKXWMA6r').then(
		// 	function (response) {
		// 		console.log('SUCCESS!', response.status, response.text)
		// 	},
		// 	function (error) {
		// 		console.log('FAILED...', error)
		// 	}
		// )
	}

	return (
		<div class="mx-auto mt-40 flex h-96 max-w-4xl bg-primary p-7 shadow-md">
			<div class="w-full">
				<h1>Skontaktuj się z nami! </h1>
				<form id="contact-form">
					<div class="flex ">
						<div>
							<label>Imię i nazwisko</label>
							<input placeholder="Imię i nazwisko" type="text" name="user_name" />
						</div>
						<div>
							<label>Email</label>
							<input placeholder="Email" type="email" name="user_email" />
						</div>
					</div>
					<div>
						<label>Wiadomość</label>
						<textarea class="w-full" placeholder="Wiadomość" name="message"></textarea>
					</div>
					{/* <input type="submit" value="Send" /> */}
				</form>
				<Button onClick={() => sendEmail()}>Wyślij formularz</Button>
			</div>
		</div>
	)
}
