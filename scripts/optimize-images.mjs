import sharp from 'sharp'

const jobs = [
	{ src: 'src/media/images/discount_left.jpg', width: 600, out: 'public/images/discount_left' },
	{ src: 'src/media/images/discount_right.jpeg', width: 600, out: 'public/images/discount_right' },
	{
		src: 'src/media/images/main_banner.webp',
		width: 1200,
		out: 'public/images/og-default',
		mode: 'og'
	}
]

for (const { src, width, out, mode } of jobs) {
	if (mode === 'og') {
		await sharp(src)
			.resize({ width: 1200, height: 630, fit: 'cover' })
			.jpeg({ quality: 80, mozjpeg: true })
			.toFile(`${out}.jpg`)
		console.log(`${out}.jpg`)
		continue
	}

	const base = sharp(src).resize({ width, withoutEnlargement: true })
	await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(`${out}.jpg`)
	await base.clone().webp({ quality: 76 }).toFile(`${out}.webp`)
	console.log(`${out}.jpg + .webp`)
}
