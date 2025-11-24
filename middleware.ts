import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	'nuface-mini-starter-kit',
	'solawave-4-in-1-red-light-therapy',
	'dr-dennis-gross-spectralite-faceware',
	'hxdzfx-facial-light-therapy',
	'lilyana-naturals-retinol-cream',
	'glo24k-rejuvenation-beauty-device',
	'nuderma-clinical-skin-therapy',
	'mlay-rf-skin-tightening-machine',
	'loreal-collagen-moisture-filler',
	'tree-hut-shea-sugar-scrub',
	'cerave-skin-renewing-night-cream',
	'mighty-patch-original',
	'medicube-zero-pore-pads',
	'cosrx-advanced-snail-96-mucin',
	'biodance-bio-collagen-mask',
	'the-ordinary-hyaluronic-acid',
	'cerave-pm-facial-moisturizing-lotion',
	'drmtlgy-anti-aging-tinted-moisturizer',
	'daolyo-hydrocolloid-patches',
	'loreal-paris-collagen-moisturizer',
	'vt-cosmetics-cica-mask',
	'tonymoly-tako-pore-blackhead-scrub',
	'24k-gold-under-eye-patches',
	'good-molecules-retinol-cream',
	'the-ordinary-caffeine-solution',
	'drmtlgy-luminous-eye-corrector',
	'grace-and-stella-caffeine-eye-serum',
	'bio-oil-skincare-oil',
	'maree-gold-collagen-eye-gels',
	'roselynboutique-microdermabrasion-kit',
	'lymphatic-drainage-massager',
	'solawave-pimple-patches',
	'elishine-face-massager',
	'beard-club-derma-roller',
	'coslus-facial-cleansing-brush',
	'gold-bond-ultimate-healing',
	'modelones-gel-polish-set',
	'cutex-ultra-powerful-remover',
	'hard-as-hoof-nail-strengthening-cream',
	'nyk1-nail-glue',
	'truskin-vitamin-c-serum'
]


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://charcoal-black.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/reviews/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('char', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/coal'],
}