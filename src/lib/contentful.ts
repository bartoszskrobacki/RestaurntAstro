import contentful from 'contentful'

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	//import.meta.env.DEV ?
	accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
	//: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: 'cdn.contentful.com'
})
