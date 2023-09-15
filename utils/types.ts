export type Wordings = {
	hero: {
		heading1: string
		span: string
		text: string
		cta: string
	}
	speezard: {
		heading2: string
		heading3: string
		span: string
		span2: string
		alt: string
		image: string;
		why: Why[]
		items: Item[]
		subtitle: string
	}
	roadmap: {
		heading2: string
		span: string
		alt: string
		text: {
			p1: string
			p2: string
		}
		heading3: string
		span2: string
		cta: string
	}
	community: {
		heading2: string
		span: string
		alt: string
		text: {
			p1: string
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
		bullets: Why[]
	}
	projects: {
		heading2: string
		span: string
		projects: Project[]
	}
	partners: { 
		heading2: string
		span: string
		heading3: string
		cta: string
		proyectos: Proyecto []
		stat: Stat[]
	}
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
	movements: {
		heading2: string
		span: string
	}
}


type Why = {
	id: number
	heading5: string
	text: string
}

type Item = {
	id: number
	heading5: string
	text: string
	image: string
	alt: string
}

export type Link = {
	id?: number | string
	external?: boolean
	icon?: string
	text?: string
	href: string
}

type Stat = {
	number: number
	text: string
}

type Proyecto = {
	id: number
    src: string
    alt: string
	web: string
}

type Testimonial = {
	id: number
	text: string
	person: {
		img: string
		alt?: string
		name: string
		description: string
		href: string
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