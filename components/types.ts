import { Project, Link } from '../utils/types'

export type CTALinkProps = Link
export type ProjectCardProps = Project
export type TestimonialCardProps = {
	text: string
	person: {
		name: string
		description: string
	}
}
export type FooterLinkProps = Link

export type Wordings = {
	navbar: Link[]
	footer: {
		logo: string
		alt: string
		text: string
		links: {
			col1: Link[]
			col2: Link[]
			col3: Link[]
		}
		bottom: {
			text: string
			span: string
			social: Link[]
		}
	}
}

export type Size = {
	width: number | undefined
	height: number | undefined
}
