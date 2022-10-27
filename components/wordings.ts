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
			href: 'testimonies',
			text: 'Testimonios',
		},
		{
			href: 'mentors',
			text: 'Mentores',
		},
	],
	hero: {
		heading1: 'Hacemos crecer tu start up Web3 en ',
		span: 'comunidad.',
		text: 'Lanzamos el primer programa pre-acelerador de startups Web3 que pone una comunidad mínima viable al servicio de nuevos emprendimientos en el ecosistema.',
		footer: {
			text: 'Powered by',
			alt: 'logo comunidad resiliente',
		},
	},
	speezard: {
		heading2: '¿Por qué elegir Speezard para tu ',
		span: 'start-up',
		alt: 'imagen abstracta de un espiral de colores',
		items: [
			{
				id: 1,
				heading5: 'Escuchamos tu necesidad',
				text: 'Desde el inicio te ayudamos a darle forma a tu idea.',
			},
			{
				id: 2,
				heading5: 'Co-creamos en comunidad',
				text: 'Ponemos a nuestra comunidad al servicio de tu proyecto.',
			},
			{
				id: 3,
				heading5: 'Te impulsamos a ir por más',
				text: 'Te contactamos con potenciales inversores del ecosistema cripto.',
			},
		],
	},
	community: {
		heading2: 'Co-construimos tu proyecto web3 en ',
		span:'comunidad.',
		text: {
			p1: 'Nuestro mayor diferencial es brindar a los proyectos que participen del programa de un entorno de entusiastas Web3 en especialidades como desarrollo, marketing, contenido, diseño, producto, negocio, entre otros.',
			p2: 'Speezard surge de la comunidad Resiliente, que cuenta con cientos de personas profundamente involucradas con la filosofía de la descentralización y blockchain, y en Speezard, están al servicio de los proyectos.',
		},
	},
}

export default wordings
