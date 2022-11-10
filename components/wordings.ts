import { Wordings } from './types'

const wordings: Wordings = {
	navbar: [
		{
			href: 'speezard',
			text: 'Speezard',
		},
		{
			href: 'community',
			text: 'Comunidad',
		},
		{
			href: 'projects',
			text: 'Proyectos',
		},
		{
			href: 'mentors',
			text: 'Mentores',
		},
	],
	footer: {
		logo: 'logos/logo-resiliente-blanco.png',
		alt: 'logo resiliente blanco',
		text: 'Co-construyendo la Web 3.0',
		links: {
			col1: [
				{
					id: 1,
					external: false,
					href: 'community',
					text: 'Comunidad',
				},
				{
					id: 2,
					external: true,
					href: 'https://discord.gg/zjt9Up3JWp',
					text: 'Resiliente',
				},
				// {
				// 	id: 3,
				// 	external: true,
				// 	href: '/comunidad-mínima-viable',
				// 	text: 'Comunidad Mínima Viable',
				// },
				{
					id: 4,
					external: false,
					href: 'proof-of-build',
					text: 'Builders',
				},
			],
			col2: [
				{
					id: 1,
					external: false,
					href: 'speezard',
					text: 'Programa',
				},
				// {
				// 	id: 2,
				// 	external: true,
				// 	href: '/contenido',
				// 	text: 'Contenido',
				// },
				{
					id: 3,
					external: false,
					href: 'mentors',
					text: 'Mentores',
				},
				{
					id: 4,
					external: false,
					href: 'proof-of-build',
					text: 'Proof of Build',
				},
				// {
				// 	id: 5,
				// 	external: false,
				// 	href: 'testimonials',
				// 	text: 'Testimonios',
				// },
			],
			col3: [
				{
					id: 1,
					external: false,
					href: 'contact',
					text: 'Ser Parte',
				},
			],
		},
		bottom: {
			text: '2022 @ Speezard by ',
			span: 'Comunidad Resiliente',
			social: [
				{
					id: 1,
					icon: 'twitter',
					href: 'https://www.twitter.com/speezard_web3',
				},
				{
					id: 2,
					icon: 'discord',
					href: 'https://discord.gg/zjt9Up3JWp',
				},
				{
					id: 3,
					icon: 'linkedin',
					href: 'https://www.linkedin.com/company/speezard-web3/about/',
				},
			],
		},
	},
}

export default wordings
