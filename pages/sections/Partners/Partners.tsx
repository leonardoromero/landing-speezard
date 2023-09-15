import wordings from '../../../utils/wordings'
import Image from 'next/image'
import Link from 'next/link'

import Contact from '../../../components/Contact';

import Platzi from '../../../public/partnersV1.5/platzi.svg'
import Think from '../../../public/partnersV1.5/think.svg'
import Talent from '../../../public/partnersV1.5/talent.svg'
import Ripio from '../../../public/partnersV1.5/ripio.svg'
import Solow from '../../../public/partnersV1.5/solow.svg'
import Investba from '../../../public/partnersV1.5/investba.svg'
import Emprear from '../../../public/partnersV1.5/emprear.svg'
import Lachain from '../../../public/partnersV1.5/lachain.svg'

import Vean from '../../../public/projectsV1.5/vean.svg'
import Cracks from '../../../public/projectsV1.5/cracks.svg'
import Empathia from '../../../public/projectsV1.5/empathia.svg'
import Bydyorside from '../../../public/projectsV1.5/bydyorside.svg'
import Chainjet from '../../../public/projectsV1.5/chainjet.svg'
import Crypstation from '../../../public/projectsV1.5/crypstation.svg'
import Provacy from '../../../public/projectsV1.5/Provacy.svg'
import Keywise from '../../../public/projectsV1.5/Keywise.svg'

const {
    partners: { heading2, span, heading3, stat, cta },
} = wordings

function Partners() {

	const partners = [
		{
			id: 1,
			src: Ripio,
			alt: "Ripio",
			web: 'https://www.ripio.com/ar/',
			class: 'ripio',
		},
		{
			id: 2,
			src: Lachain,
			alt: "Lachain",
			web: 'https://www.lacchain.net/home',
			class: 'chain',
		},
		{
			id: 3,
			src: Platzi,
			alt: "Platzi",
			web: 'https://platzi.com/',
			class: 'platzi',
		},
		{
			id: 4,
			src: Think,
			alt: "Think & Dev",
			web: 'https://thinkanddev.com/',
			class: 'item',
		},
		{
			id: 5,
			src: Investba,
			alt: "InvestBA",
			web: 'https://investba.buenosaires.gob.ar/es',
			class: 'invest',
		},
		{
			id: 6,
			src: Emprear,
			alt: "Emprear",
			web: 'https://emprear.org.ar/',
			class: 'emprear',
		},
	];

	const projects = [
		{
			id: 1,
			src: Vean,
			alt: "Vean",
			web: 'https://twitter.com/veanbooks',
		},
		{
			id: 2,
			src: Cracks,
			alt: "Cracks",
			web: 'https://twitter.com/cracks_app',
		},
		{
			id: 3,
			src: Empathia,
			alt: "Empathia",
			web: 'https://twitter.com/empathiaproject',
		},
		{
			id: 4,
			src: Bydyorside,
			alt: "Bydyorside",
			web: 'https://twitter.com/Bydyorside',
		},
		{
			id: 5,
			src: Chainjet,
			alt: "Chainjet",
			web: 'https://twitter.com/chainjetio',
		},
		{
			id: 6,
			src: Crypstation,
			alt: "Crypstation",
			web: 'https://twitter.com/crypstation',
		},
		{
			id: 7,
			src: Provacy,
			alt: "Provacy",
			web: 'https://twitter.com/ProvacyProtocol',
		},
		{
			id: 8,
			src: Keywise,
			alt: "Keywise",
			web: 'https://twitter.com/KeywiseArg',
		},
	];

	return (
		<section className="partners" id="partners">
			<div className='top'>
				<h2 className='top-title'>
				<span> {span} </span>
				{heading2}
				</h2>
			</div>
			<div className='box'>
				{partners.map((p) => (
                    <div key={p.id} >
						<Link
                            className="button"
                            href={p.web}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image 
                                src={p.src}
                                alt={p.alt}
                                height={100}
                                width={200}
								className={p.class}
                            />
						</Link>
                    </div>
                ))}
			</div>
			<div className='bottom'>
				<div className='top'>
					<h2 className='top-title'>
						{heading3}
					</h2>
				</div>
				<div className='partners__numbers'>
					{stat.map(stat => (
						<div
							className="partners__numbers__stat"
							key={stat.number}
						>
							<h3>{stat.number}</h3>
							<h4>{stat.text}</h4>
						</div>
					))}
				</div>
				<div className='projects'>
					{projects.map((pro) => (
						<div
							key={pro.id}
						>
							<Link
								className="button"
								href={pro.web}
								target='_blank'
								rel='noreferrer'
							>
								<Image 
									src={pro.src}
									alt={pro.alt}
									height={100}
									width={200}
									className='individual'
								/>
							</Link>
						</div>
					))}
				</div>
				<div className='calltoaction'>
					<Contact
						ctaText="Postulate ahora!"
						buttonColor="white"
					/>
				</div>
			</div>
			
		</section>
	)
}

export default Partners
