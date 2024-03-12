import { type Component, type JSX } from 'solid-js'

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary'
}

const Button: Component<ButtonProps> = (props) => {
	return (
		<button
			{...props}
			class="rounded-full bg-primary-500 px-4 py-2 font-bold text-white hover:bg-primary-700"
		>
			{props.children}
		</button>
	)
}

export default Button
