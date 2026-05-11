import { createResource, For, Show } from 'solid-js'
import { getPromotion } from '@lib/api'
import type { PromotionResponse } from '@lib/api'

const PROMOTION_TAG = import.meta.env.PUBLIC_PROMOTION_TAG

async function fetchPromotion(): Promise<PromotionResponse | null> {
	return getPromotion(PROMOTION_TAG)
}

export default function DiscountBanner() {
	const [data] = createResource(fetchPromotion)

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
						<span class="mb-4 flex text-primary-100">{data()?.promotion?.name}</span>

						<p class="my-4 text-primary-100">
							Codziennie przygotowujemy dla państwa specjalną ofertę "Dania dnia", są to dania które
							zazwyczaj nie są w naszej karcie w atrakcyjnych cenach. Dostępne zarówno na miejscu i w
							dowozie. W dniu dzisiejszym zapraszamy na:
						</p>

						<Show when={data()} fallback={<p class="text-primary-100">Ładowanie promocji...</p>}>
							<div class="border-corners flex flex-col gap-2 p-2 text-xl text-primary-100">
								<For each={data()?.promotion?.meals}>
									{(meal) => (
										<div class="flex justify-between">
											<span>
												{meal.name}
												{meal.description ? `, ${meal.description}` : ''}
												{meal.additionals ? ` (${meal.additionals})` : ''}
											</span>
											<span>{meal.price.toFixed(2)}</span>
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
