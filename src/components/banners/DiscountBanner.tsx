import { createResource, For, Show } from 'solid-js'

interface FoodProps {
	name: string
	price: number
	description?: string
}

interface FoodMenuItem {
	fields: FoodProps
}

interface FoodDiscount {
	date: string
	meals: FoodMenuItem[]
}

const SPACE_ID = import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = import.meta.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN

async function fetchPromotion(): Promise<FoodDiscount | null> {
	const res = await fetch(
		`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=promotion&access_token=${ACCESS_TOKEN}&include=2`
	)
	const data = await res.json()
	if (!data.items?.length) return null

	const item = data.items[0]
	const includes: any[] = data.includes?.Entry ?? []

	const meals: FoodMenuItem[] = (item.fields.meals ?? []).map((link: any) => {
		const entry = includes.find((e: any) => e.sys.id === link.sys.id)
		return { fields: entry?.fields ?? {} }
	})

	return { date: item.fields.date, meals }
}

export default function DiscountBanner() {
	const [promotion] = createResource(fetchPromotion)

	const postDate = () => {
		const d = promotion()?.date
		if (!d) return ''
		return new Date(d).toLocaleDateString('pl', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		})
	}

	return (
		<div class="w-full bg-primary-300 py-16">
			<div class="mx-auto flex max-w-[1600px] flex-col justify-center">
				<div class="mx-auto flex flex-col md:flex-row">
					<div class="flex items-center justify-center gap-8 sm:px-16">
						<img
							src="/images/discount_left.jpg"
							alt="Banner z promocjami"
							height={400}
							width={300}
							class="image-shadow hidden rounded-xl shadow-2xl md:block"
						/>
						<img
							src="/images/discount_right.jpeg"
							alt="Banner z promocjami"
							height={450}
							width={300}
							class="image-shadow rounded-xl shadow-2xl"
						/>
					</div>
					<div class="flex w-full flex-col justify-center px-8 sm:px-16 md:w-1/2 md:p-16">
						<h1 class="mb-0">PROMOCJA DNIA!</h1>
						<span class="mb-4 flex text-primary-100">{postDate()}</span>

						<p class="my-4 text-primary-100">
							Codziennie przygotowujemy dla państwa specjalną ofertę "Dania dnia", są to dania które
							zazwyczaj nie są w naszej karcie w atrakcyjnych cenach. Dostępne zarówno na miejscu i w
							dowozie. W dniu dzisiejszym zapraszamy na:
						</p>

						<Show when={promotion()} fallback={<p class="text-primary-100">Ładowanie promocji...</p>}>
							<div class="border-corners flex flex-col gap-2 p-2 text-xl text-primary-100">
								<For each={promotion()?.meals}>
									{(meal) => (
										<div class="flex justify-between">
											<span>
												{meal?.fields?.name}, {meal?.fields?.description}
											</span>
											<span>{meal?.fields?.price?.toFixed(2)}</span>
										</div>
									)}
								</For>
							</div>
						</Show>
					</div>
				</div>
			</div>
		</div>
	)
}
