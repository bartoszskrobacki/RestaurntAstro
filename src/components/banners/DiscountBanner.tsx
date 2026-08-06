import { createResource, For, Show } from 'solid-js'
import { isServer } from 'solid-js/web'
import { getPromotion } from '@lib/api'
import type { PromotionResponse } from '@lib/api'

const PROMOTION_TAG = import.meta.env.PUBLIC_PROMOTION_TAG

async function fetchPromotion(): Promise<PromotionResponse | null> {
	return getPromotion(PROMOTION_TAG)
}

/**
 * Oferta dnia zmienia sie codziennie, a build strony nie leci codziennie - dlatego
 * lista dan pobierana jest z API po stronie klienta. Komponent renderuje sie jednak
 * przez SSR (client:load zamiast client:only), zeby stala czesc bannera - naglowek
 * i opis z frazami - trafila do HTML-u i byla indeksowana.
 */
export default function DiscountBanner() {
	// Zrodlo `false` na serwerze blokuje pobranie w trakcie builda - inaczej do HTML-u
	// trafilaby promocja z dnia deployu i wisiala tam do nastepnego wgrania strony.
	// Na kliencie zrodlo jest `true`, wiec po hydracji leci swiezy fetch.
	const [data] = createResource(() => !isServer, fetchPromotion)

	const poromotionDate = () => {
		const promo = data()
		return promo
			? new Date(promo.promotion.updatedAt).toLocaleDateString('pl-PL', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric'
				})
			: ''
	}

	return (
		<div class="w-full bg-primary-300 py-16">
			<div class="mx-auto flex max-w-[1600px] flex-col justify-center">
				<div class="mx-auto flex flex-col md:flex-row">
					<div class="flex items-center justify-center gap-8 sm:px-16">
						<img
							src="/images/discount_left.jpg"
							alt="Danie dnia serwowane w Barze u Piotra w Gliwicach"
							height={400}
							width={300}
							loading="lazy"
							class="image-shadow hidden rounded-xl shadow-2xl md:block"
						/>
						<img
							src="/images/discount_right.jpeg"
							alt="Domowy obiad z zestawu dnia – Bar u Piotra Gliwice"
							height={450}
							width={300}
							loading="lazy"
							class="image-shadow rounded-xl shadow-2xl"
						/>
					</div>
					<div class="flex w-full flex-col justify-center px-8 sm:px-16 md:w-1/2 md:p-16">
						<h2 class="mb-0">Danie dnia w Gliwicach</h2>
						<span class="mb-4 flex text-primary-100">{poromotionDate()}</span>

						<p class="my-4 text-primary-100">
							Codziennie przygotowujemy dla państwa specjalną ofertę "Dania dnia", są to dania które
							zazwyczaj nie są w naszej karcie w atrakcyjnych cenach. Dostępne zarówno na miejscu i w
							dowozie. W dniu dzisiejszym zapraszamy na:
						</p>

						<Show
							when={data()}
							fallback={
								<div class="text-primary-100">
									<p class="mb-2">
										Przykładowe dania, które pojawiają się w ofercie dnia: rosół z makaronem, żurek
										z jajkiem i kiełbasą, kotlet schabowy z ziemniakami i surówką, placki
										ziemniaczane, pierogi ruskie, gołąbki, bigos i fasolka po bretońsku.
									</p>
									<p>
										Aktualną ofertę na dziś podajemy też telefonicznie pod numerem{' '}
										<a href="tel:+48322322402">32 232 24 02</a>, a stałe pozycje znajdziesz w{' '}
										<a href="/menu/">naszym menu</a>.
									</p>
								</div>
							}
						>
							<div class="border-corners flex flex-col gap-2 p-2 text-xl text-primary-100">
								<For each={data()?.promotion?.meals}>
									{(meal) => (
										<div class="flex justify-between">
											<span>
												{meal.name}
												{meal.description ? `, ${meal.description}` : ''}
												{meal.additionals ? ` (${meal.additionals})` : ''}
											</span>
											<span>{meal.price}</span>
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
