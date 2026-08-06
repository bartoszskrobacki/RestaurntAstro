export const BUSINESS = {
	name: 'Bar u Piotra',
	legalName: 'Intercom Piotr Jezik, Michał Jezik, Krzysztof Skrobacki S.C.',
	url: 'https://obiady-gliwice.pl',
	email: 'info@goscinna.gliwice.pl',
	phones: ['32 232 24 02', '570 100 110'],
	address: {
		street: 'ul. Zwycięstwa 17',
		city: 'Gliwice',
		postalCode: '44-100',
		region: 'śląskie',
		country: 'PL'
	},
	geo: { lat: 50.2945, lng: 18.6659 },
	social: ['https://www.facebook.com/obiadygliwice'],
	priceRange: '$',
	cuisine: ['Polska', 'Domowa', 'Bar mleczny'],
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '18:00'
		},
		{ days: ['Saturday'], opens: '10:00', closes: '16:00' },
		{ days: ['Sunday'], opens: '11:00', closes: '16:00' }
	]
} as const

export const ADDRESS_LINE = `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}`

export const telHref = (phone: string) => `tel:+48${phone.replace(/\s/g, '')}`
