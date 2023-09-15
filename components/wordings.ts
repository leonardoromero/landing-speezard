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
			href: 'roadmap',
			text: 'Roadmap',
		},
		{
			href: 'mentors',
			text: 'Mentores',
		},
		{
			href: 'partners',
			text: 'Partners',
		},
	],
	footer: {
		logo: 'logos/logo-resiliente-blanco.png',
		logo2: 'logos/logo-speezard-blanco.svg',
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
					href: 'https://bit.ly/ComunidadResiliente',
					text: 'Resiliente',
				},
				{
					id: 3,
					external: true,
					href: 'https://discord.gg/fZ6xzdwZb',
					text: 'Think & Dev',
				},
				//{
				//	id: 4,
				//	external: false,
				//	href: 'proof-of-build',
				//	text: 'Builders',
				//},
			],
			col2: [
				{
					id: 1,
					external: false,
					href: 'roadmap',
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
					href: 'partners',
					text: 'Partners',
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
			text: '2023 @ ',
			span: ' Comunidad Resiliente',
			span2: 'Speezard ',
			social: [
				{
					id: 1,
					icon: 'twitter',
					href: 'https://twitter.com/Speezard_W3',
				},
				{
					id: 2,
					icon: 'discord',
					href: 'https://bit.ly/ComunidadResiliente',
				},
				{
					id: 3,
					icon: 'linkedin',
					href: 'https://bit.ly/LinkedinSpeezard',
				},
			],
		},
	},
}

export default wordings
