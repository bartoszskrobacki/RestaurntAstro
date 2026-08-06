const DEFAULT_WIDTHS = [480, 768, 1024, 1440, 1920]

const withProtocol = (url: string) => (url.startsWith('//') ? `https:${url}` : url)

export function contentfulImage(url: string, width: number, quality = 75): string {
	return `${withProtocol(url)}?w=${width}&fm=webp&q=${quality}`
}

export function contentfulSrcSet(
	url: string,
	widths: number[] = DEFAULT_WIDTHS,
	quality = 75
): string {
	return widths.map((w) => `${contentfulImage(url, w, quality)} ${w}w`).join(', ')
}
