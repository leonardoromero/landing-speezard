import { Project } from '../utils/types'

export type CTALinkProps = Link
export type ProjectCardProps = Project
export type TestimonialCardProps = {
	text: string
	person: {
		name: string
		description: string
	}
}

export type Wordings = {
	navbar: Link[]
}

export type Size = {
	width: number | undefined
	height: number | undefined
}

type Link = {
	href: string
	text: string
}
