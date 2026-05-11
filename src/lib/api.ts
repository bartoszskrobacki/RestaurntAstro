const API_URL = import.meta.env.PUBLIC_API_URL

export interface Meal {
	name: string
	description?: string
	additionals?: string
	price: number
}

export interface Promotion {
	id: string
	tag: string
	name: string
	meals: Meal[]
}

export interface PromotionResponse {
	promotion: Promotion
	image: string
}

export async function getPromotion(tag: string): Promise<PromotionResponse | null> {
	const res = await fetch(`${API_URL}/promotion/${tag}`)
	if (!res.ok) return null
	return res.json()
}
