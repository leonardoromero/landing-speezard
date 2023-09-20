import { Wordings } from './types'

const wordings: Wordings = {
	hero: {
		heading1: 'Validamos y hacemos crecer tu startup Web3 en ',
		span: 'comunidad.',
		text: 'Obtené el acompañamiento, conocimiento y mentorias necesarias para acelerar tu emprendimiento sumandote a la nueva camada de nuestro programa incubador de 12 semanas.',
		cta: 'Postulate ahora!',
	},
	speezard: {
		heading2: '¿Por qué ',
		heading3: '3 razones para ',
		span: 'Speezard',
		span2: 'embarcar',
		alt: 'imagen abstracta de un espiral de colores',
		subtitle: 'Emprendedores "Early Stage" fallan por 3 razones principales.',
		image: '',
		why: [
			{
				id: 1,
				heading5: 'No encontrar Product-Market fit',
				text: 'Te ayudamos a encontrar tu mercado objetivo y a distribuir tu producto.',
			},
			{
				id: 2,
				heading5: 'No poder levantar capital',
				text: 'Lo resolvemos con la conexión con Angeles y VCs adecuados para cada proyecto.',
			},
			{
				id: 3,
				heading5: 'El equipo no es idoneo',
				text: 'Contamos con un alto nivel de networking en el segmento web3, builders y calidad de mentores',
			},
		],
		items: [
			{
				id: 1,
				heading5: 'Comunidad Mínima Viable',
				text: 'La principal causa de falla de la startups es no encontrar y posicionarse en un mercado objetivo. Nuestra comunidad te ayuda a validar tus hipótesis y a encontrar tu nicho!.',
				image: '/embarcar/first.jpeg',
				alt:'Comunidad Mínima Viable'
			},
			{
				id: 2,
				heading5: 'Conexiones Reales',
				text: 'Speezard conecta a sus incubados con Inversores Angeles y Venture Capitals locales e internacionales para que puedan recibir el financiamiento que necesitan para escalar.',
				image: '/embarcar/second.jpeg',
				alt:'Conexiones Reales'
			},
			{
				id: 3,
				heading5: 'Entusiastas Web3',
				text: 'Nuestro diferencial es brindar a los participantes del programa distintas especialidades como desarrollo, legales, marketing, contenido, diseño, producto y negocio con foco en web3.',
				image: '/embarcar/third.jpeg',
				alt:'Entusiastas Web3'
			},
		],
	},
	roadmap: {
		heading2: 'del programa',
		span: 'Roadmap ',
		alt: 'roadmap del programa',
		text: {
			p1: 'En este programa te daremos las herramientas, recursos y orientación necesarios para iterar tu proyecto, con Pitch-days de prueba con la devolución de un jurado especializado.',
			p2: 'Completa el form y nuestro equipo te va a contactar para coordinar una entrevista inicial.',
		},
		heading3: 'Listos para ',
		span2: 'despegar',
		cta: 'postulaciones abiertas',
	},
	community: {
		heading2: 'Una comunidad con ',
		span: 'resiliencia',
		alt: 'Comunidad en movimiento',
		text: {
			p1: 'Speezard surge de la comunidad Resiliente, que cuenta con cientos de entusiastas, emprendedores y “Builders” profundamente involucradas con la filosofía de la descentralización, web3 y blockchain que dentro de Speezard, están al servicio de los proyectos para potenciar su recorrido en el proceso de incubación.',
		},
	},
	proof_of_build: {
		span: 'Proof of Build',
		heading2: ', nuestro incentivo orgánico',
		texts: [
			{
				id: 1,
				p: 'Tenemos un sistema de incentivos impulsado por los proyectos y basado en el interés de los builders en formar parte.',
			},
			{
				id: 2,
				p: 'Los proyectos tienen el enorme desafío de pitchear su proyecto de forma que resulten de interés para la comunidad que se encuentra a disposición de los mismos.',
			},
			{
				id: 3,
				p: 'Contamos con un equipo de mentores especializados para lograr ese objetivo.',
			},
		],
		bullets: [
			{
				id: 1,
				heading5: 'La comunidad al servicio de los proyectos',
				text: 'Nuestra comunidad en Discord tiene la libertad de participar de los proyectos que más les llamen la atención y los interpelen, por lo que será clave que puedas incorporar el conocimiento Speezard para atraerlos.',
			},
			{
				id: 2,
				heading5: 'Prueba de co-construcción',
				text: 'Proof of Build otorga a los Builders, miembros clave de la comunidad, un token que prueba su contribución en el impulso de los proyectos. Estos tokens son otorgados directamente por los proyectos en base al mérito de cada Builder.',
			},
			{
				id: 3,
				heading5: 'Las bases para el futuro',
				text: 'Los proyectos tienen la oportunidad de atraer talento de manera orgánica, ya sea de forma temporaria para lo que dure el programa, o sentando las bases para una relación a largo plazo.',
			},
		],
	},
	projects: {
		heading2: 'que nos apoyan.',
		span: 'Partners ',
		projects: [
			{
				id: 1,
				img: 'boost',
				alt: 'logo de boost',
				heading6: 'Boost',
				description: 'Plataforma para potenciar microempresas en LATAM',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@Boost__Finance',
						href: 'https://twitter.com/boost__finance',
					},
				],
			},
			{
				id: 2,
				img: 'cracks',
				alt: 'logo de cracks',
				heading6: 'Cracks',
				description:
					'Juego de deportes basado en resultados reales, con premios en crypto',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@Cracks_app',
						href: 'https://www.twitter.com/cracks_app',
					},
				],
			},
			{
				id: 3,
				img: 'rebrick',
				alt: 'logo de rebrick',
				heading6: 'Rebrick',
				description:
					'Plataforma para la democratización de las inversiones inmobiliarias',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@RebrickW3',
						href: 'https://www.twitter.com/rebrickw3',
					},
				],
			},
			{
				id: 4,
				img: 'crypstation',
				alt: 'logo de crypstation',
				heading6: 'Crypstation',
				description: 'Primer Crypto Café Club de Latam y el Metaverso',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@Crypstation',
						href: 'https://www.twitter.com/crypstation',
					},
				],
			},
			{
				id: 5,
				img: 'vean',
				alt: 'logo de vean',
				heading6: 'Vean',
				description: 'Editorial web3 sustentable',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@VeanBooks',
						href: 'https://www.twitter.com/veanbooks',
					},
				],
			},
			{
				id: 6,
				img: 'strigo',
				alt: 'logo de strigo',
				heading6: 'Strigo',
				description: 'Frontend unificado para soluciones DeFi',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@Strigo_fi',
						href: 'https://www.twitter.com/strigo_fi',
					},
				],
			},
			{
				id: 7,
				img: 'knoly',
				alt: 'logo de knoly',
				heading6: 'Knoly',
				description:
					'Registro verificable de conocimientos humanos a través de validaciones P2P',
				links: [
					{
						id: 'twitter',
						icon: 'twitter-color',
						text: '@KnolyMe',
						href: 'https://www.twitter.com/knolyme',
					},
				],
			},
		],
	},
	partners: {
		heading2: 'que nos apoyan',
		span: 'Partners ',
		heading3: 'Proyectos que ya pasaron por speezard',
		cta: 'Postulate ya!',
		proyectos: [
			{
				id: 1,
				src: 'vean',
				alt: "Think & Dev",
				web: 'https://openai.com/',
			},
			{
				id: 2,
				src: 'vean',
				alt: "Talent Protocol",
				web: 'https://www.freecodecamp.org/',
			},
			{
				id: 3,
				src: 'vean',
				alt: "Ripio",
				web: 'https://developer.mozilla.org/es/',
			},
			{
				id: 4,
				src: 'vean',
				alt: "Emprear",
				web: 'https://codepen.io/',
			},
			{
				id: 5,
				src: 'vean',
				alt: "Emprear",
				web: 'https://cryptozombies.io/',
			},
			{
				id: 6,
				src: 'vean',
				alt: "Emprear",
				web: 'https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js',
			},
		],
		stat: [
			{
				number: 16,
				text: 'Start-ups',
			},
			{
				number: 42,
				text: 'Emprendedores',
			},
			{
				number: 18,
				text: 'Mentores',
			},
			{
				number: 24,
				text: 'Desarrolladores',
			},
		],
	},
	testimonials: {
		heading2: 'Testimonios',
		testimonials: [
			{
				id: 1,
				text: '“Definitivamente LA comunidad. Todos los que son parte de speezard aportan y se interesan por los proyectos. No solo los mentores sino incluso los miembros te escriben, te dan feedback, te pasan contactos que te ayudan, y sin pedir nada a cambio. Son una gran familia.”',
				person: {
					name: '@BrunoArenzo',
					img: 'bruno',
					description: 'Abogado Tech  / Co-founder',
					href: 'https://twitter.com/BrunoArenzo',
				},
			},
			{
				id: 2,
				text: '“Fue todo muy revelador. Conocerlxs irl, entender nuevas metodologías de trabajo, enfrentar nuevos desafíos, entre otras cosas, me flashearon un toque la estantería.”',
				person: {
					name: '@adbmez',
					img: 'adb',
					description: ' Co-founder',
					href: 'https://twitter.com/adbmez',
				},
			},
			{
				id: 3,
				text: '“Speezard derivó en que me anote en el curso de PM de Coder para desarrollar otra solución (esta vez, web2) para pymes. Y no sólo eso, sino que las herramientas que me dio Speezard las estoy usando para trabajar sobre este nuevo proyecto.”',
				person: {
					name: '@titokosa',
					img: 'tito',
					description: 'Entusiasta Web3',
					href: 'https://twitter.com/titokosa',
				},
			},
			{
				id: 4,
				text: '“Lo que más me gustó del programa fue ayudarme a entender la forma en que se debe poner en marcha una startup, desde el principio, a nivel macro. Me ayudó a ordenar y priorizar ideas.”',
				person: {
					name: '@0xnico_',
					img: 'nico',
					description: 'Blockchain engineer / Co-founder',
					href: 'https://twitter.com/0xnico_',
				},
			},
			{
				id: 5,
				text: '“Gracias por el apoyo. Llegamos al final del camino de una gran experiencia. Crecimos y aprendimos mucho.”',
				person: {
					name: '@ancestral_alien',
					img: 'alien',
					description: 'Co-founder',
					href: 'https://twitter.com/ancestral_alien',
				},
			},
		],
	},
	mentors: {
		heading2: 'que pasaron por Speezard',
		span: 'Mentores',
		text: 'Los mentores son las personas especialistas en una materia que tienen el desafío de hacer crecer a los proyectos, resaltando sus puntos fuertes y  marcando las áreas de mejora para llevarlos a otro nivel.',
		profiles: [
			{
				id: 1,
				img: 'resiliente',
				alt: 'imagen de perfil de resiliente',
				heading6: 'Lucas Valeggiani',
				description:
					'Co-Founder de Resiliente y Speezard 🦎 | Desarrollando nuevos negocios en fu.do',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@Resiliente_eth',
						href: 'https://www.twitter.com/resiliente_eth',
					},
				],
			},
			{
				id: 2,
				img: 'fedelen',
				alt: 'imagen de perfil de Fede Lenci',
				heading6: 'Federico Lenci',
				description:
					'Co-Founder de Resiliente y Speezard 🦎 | comunicación, marketing y diseño | Researcher crypto & start-ups',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@fede_lenci7',
						href: 'https://www.twitter.com/fede_lenci7',
					},
				],
			},
			{
				id: 3,
				img: 'erika',
				alt: 'imagen de perfil de Erika',
				heading6: 'Erika',
				description:
					'Scrum Master en Speezard 🦎 | Project Manager | OKR Coach',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@ErikaYeah_',
						href: 'https://twitter.com/ErikaYeah_',
					},
				],
			},
			{
				id: 4,
				img: 'ibliz',
				alt: 'imagen de perfil de ibliz',
				heading6: 'Tomas Lizer',
				description: 'PM | PO | Entusiasta Crypto & Web3 | Speezard & Comunidad Resiliente 🦎',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@ibliz_eth',
						href: 'https://twitter.com/ibliz_eth',
					},
				],
			},
			{
				id: 5,
				img: 'p4troy',
				alt: 'imagen de perfil de Martin Pefaur',
				heading6: 'Martin Pefaur',
				description:
					'Blockchain Expert - Lawyer - Developer, CEO of Ludus Game and P4 Tech Solutions',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@MartinPefaur',
						href: 'https://www.twitter.com/MartinPefaur',
					},
				],
			},
			{
				id: 6,
				img: 'manulamedica',
				alt: 'imagen de perfil de manu',
				heading6: 'Manu Lamedica',
				description: 'Co-Founder @GrouAgency🐙 | Advisor at Speezard 🦎',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@manulamedica',
						href: 'https://twitter.com/manulamedica',
					},
				],
			},
			{
				id: 7,
				img: 'nati',
				alt: 'imagen de perfil de Natalia Soledad Salinas',
				heading6: 'Natalia Salinas',
				description: 'Biz Dev Transfero | B2B | Ex Bitso | Ex Pomelo Fintech | Advisory PwC | emprendedora web 3.0',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@NatSalinasBXB',
						href: 'https://twitter.com/NatSalinasBXB',
					},
				],
			},
			{
				id: 8,
				img: 'paulaarenzo',
				alt: 'imagen de perfil de Paula Arenzo',
				heading6: 'Paula Arenzo',
				description:
					'Abogada especializada en Tecnología | Consultora tech | Crypto enthusiast | Co-founder de @CryptocampoNet 🌿',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@PaulaArenzo',
						href: 'https://www.twitter.com/PaulaArenzo',
					},
				],
			},
			{
				id: 9,
				img: 'jossie',
				alt: 'imagen de perfil de Jossie',
				heading6: 'Josefina Anschütz',
				description:
					'Founder @futurefund | UX Writer 💻 | Embajadora @takenosapp | Community Builder @LaCryptaOk',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@uxjossie',
						href: 'https://twitter.com/uxjossie',
					},
				],
			},
			{
				id: 10,
				img: 'natyshi',
				alt: 'imagen de perfil de Natyshi',
				heading6: 'NatyShi',
				description:
					'Blockchain & Web3 School Owner @platzi | Web3 researcher & content creator | @W3Talk co-host | Token Engineering Jr',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@NatyShi_',
						href: 'https://www.twitter.com/NatyShi_',
					},
				],
			},
			{
				id: 11,
				img: 'solangesoifer',
				alt: 'imagen de perfil de Solange Soifer',
				heading6: 'Solange Soifer',
				description:
					'@startupgrind Chapter Director. @googlestartups Mentor. University Professor',
				links: [
					{
						id: 'twitter',
						icon: 'twitter',
						text: '@SolangeSoifer',
						href: 'https://www.twitter.com/SolangeSoifer',
					},
				],
			},
		],
	},
	movements: {
		heading2: 'Comunidad en',
		span: ' movimiento',
	},
}

export default wordings
