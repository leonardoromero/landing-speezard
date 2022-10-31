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
	projects: {
		heading2: string
		span: string
		projects: Project[]
	}
	stats: Stat[]
	testimonials: {
		heading2: string
		testimonials: Testimonial[]
	}
	mentors: {
		heading2: string
		span: string
		text: string
		profiles: Profile[]
	}
}

type Item = {
	id: number
	heading5: string
	text: string
}

type Link = {
	id: number | string
	icon: string
	text: string
	href: string
}

type Stat = {
	number: number
	text: string
}

type Testimonial = {
	id: number
	text: string
	person: {
		img?: string
		alt?: string
		name: string
		description: string
	}
}

export type Project = {
	id: number
	img: string
	alt: string
	heading6: string
	description: string
	links: Link[]
}

export type Profile = {
	id: number
	img: string
	alt: string
	heading6: string
	description: string
	links: Link[]
}