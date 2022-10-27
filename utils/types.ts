export type Wordings = {
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
	proof_of_build: {
		span: string
		heading2: string
		texts: [
			{ id: number; p: string },
			{ id: number; p: string },
			{ id: number; p: string },
		]
		bullets: Item[]
	}
}

type Item = {
	id: number
	heading5: string
	text: string
}
