import { type Accessor, type Component } from 'solid-js'
import Button from '@components/primitives/Button'
import emailjs from '@emailjs/browser'
import { createStore } from 'solid-js/store'

type Props = {}

type ContactFormType = {
	name: string
	email: string
	topic: string
	phone: string
	message: string
}

export const ContactForm: Component<Props> = ({}) => {
	const EMAIL_JS = import.meta.env.PUBLIC_EMAIL_JS
	const template_id = import.meta.env.PUBLIC_TEMPLATE_ID

	emailjs.init(EMAIL_JS)

	const serviceID = 'default_service'

	const [contactForm, setContactForm] = createStore<ContactFormType>({
		name: '',
		email: '',
		topic: '',
		phone: '',
		message: ''
	})

	const sendEmail = (event: Event) => {
		event.preventDefault()
		console.log('sent')
		console.log(JSON.stringify(contactForm))
		console.log(EMAIL_JS)
		// emailjs.send(serviceID, template_id, contactForm, EMAIL_JS).then(
		// 	function (response) {
		// 		console.log('SUCCESS!', response.status, response.text)
		// 	},
		// 	function (error) {
		// 		console.log('FAILED...', error)
		// 	}
		// )
		// setContactForm({
		// 	name: '',
		// 	email: '',
		// 	topic: '',
		// 	phone: '',
		// 	message: ''
		// })
	}

	const handleInput = (
		event: InputEvent & {
			currentTarget: HTMLInputElement
			target: HTMLInputElement
		}
	) => {
		const { name, value } = event.currentTarget
		console.log(name, value)
		setContactForm(name as keyof ContactFormType, value)
	}

	const handleTextArea = (
		event: Event & {
			currentTarget: HTMLTextAreaElement
			target: HTMLTextAreaElement
		}
	) => {
		const { name, value } = event.target
		console.log(name, value)
		setContactForm(name as keyof ContactFormType, value)
	}

	// const formSubmit = (ref: HTMLFormElement, accessor: Accessor<ContactFormType>) => {
	// 	console.log('dupa')
	// 	const callback = accessor() || (() => {})
	// 	ref.setAttribute('novalidate', '')
	// 	ref.onsubmit = async (e) => {
	// 		e.preventDefault()
	// 		let errored = false

	// 		// for (const k in fields) {
	// 		// 	const field = fields[k]
	// 		// 	// await checkValid(field, setErrors, errorClass)();
	// 		// 	if (!errored && field.element.validationMessage) {
	// 		// 		field.element.focus()
	// 		// 		errored = true
	// 		// 	}
	// 		// }
	// 		!errored && callback(ref)
	// 	}
	// }

	// const fn = (form) => {
	// 	form.submit()
	// 	console.log('Done')
	// }

	return (
		<div class="w-2/3">
			<form onSubmit={sendEmail} class="w-full" id="contact-form">
				<div class="mb-5 grid w-full grid-cols-2 gap-8">
					<div>
						{/* <label>Imię i nazwisko</label> */}
						<input
							onInput={handleInput}
							placeholder="Imię"
							type="text"
							name="name"
							required
							value={contactForm.name}
						/>
					</div>
					<div>
						{/* <label>Email</label> */}
						<input
							onInput={handleInput}
							placeholder="Email"
							type="email"
							name="email"
							required
							value={contactForm.email}
						/>
					</div>
					<div>
						{/* <label>Email</label> */}
						<input
							onInput={handleInput}
							placeholder="Temat"
							type="text"
							name="topic"
							value={contactForm.topic}
						/>
					</div>
					<div>
						{/* <label>Email</label> */}
						<input
							onInput={handleInput}
							placeholder="Telefon"
							type="text"
							name="phone"
							minlength="8"
							value={contactForm.phone}
						/>
					</div>
				</div>
				<div>
					{/* <label>Wiadomość</label> */}
					<textarea
						onChange={handleTextArea}
						class="min-h-28 w-full"
						placeholder="Wiadomość"
						name="message"
						value={contactForm.message}
					></textarea>
				</div>
				{/* <input type="submit" value="Send" /> */}
				<input class="form-submit" type="submit" value="Wyślij wiadomość" />
			</form>
		</div>
	)
}
