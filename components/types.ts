import { Project, Profile, Link } from '../utils/types'

export type CTALinkProps = Link
export type ProjectCardProps = Project
export type ProfileCardProps = Profile
export type TestimonialCardProps = {
	text: string
	person: {
		name: string
		img: string
		description: string
		href: string
	}
}
export type FooterLinkProps = Link

export type Wordings = {
	navbar: Link[]
	footer: {
		logo: string
		logo2: string
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
			span2: string
			social: Link[]
		}
	}
}

export type Size = {
	width: number | undefined
	height: number | undefined
}
