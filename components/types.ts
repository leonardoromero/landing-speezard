export type CTALinkProps = Link

export type Wordings = {
	navbar: Link[]
	hero: {
		heading1: string
		span: string
		text: string
		footer: {
			text: string
			alt: string
		}
	}
	speezard: {
		heading2: string
		span: string
		alt: string
		items: Item[]
	}
	community: {
		heading2: string
		span: string
		text: {
			p1: string
			p2: string
		}
	}
}

export type Size = {
	width: number | undefined
	height: number | undefined
}

type Link = {
	href: string
	text: string
}

type Item = {
	id: number
	heading5: string
	text: string
}
