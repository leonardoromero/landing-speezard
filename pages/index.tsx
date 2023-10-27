import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Script from 'next/script'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Community from './sections/Community'
import Hero from './sections/Hero'
import Speezard from './sections/Speezard'
import Stats from './sections/Partners'
import Testimonials from './sections/Testimonials'
import Mentors from './sections/Mentors'
import Roadmap from './sections/Roadmap'
import Movements from './sections/Movements'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<NextSeo
				title="Speezard | Incubadora Web 3"
				description="Speezard es una incubadora latinoamericana, en la cual validamos y hacemos crecer tu startup Web3 en comunidad."
				canonical="https://www.speezard.io/"
				openGraph={{
					url: 'https://www.speezard.io/',
					title: 'Speezard | Incubadora Web 3',
					description: 'Speezard es una incubadora latinoamericana, en la cual validamos y hacemos crecer tu startup Web3 en comunidad.',
					images: [
						{
							url: 'https://iili.io/JfJitte.png',
							width: 200,
							height: 50,
							alt: 'Speezard logo',
						},
					],
				}}
			/>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-G6V47G0V0D"></Script>
			<Script id="google-analytics">
				{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-G6V47G0V0D');
				`}
			</Script>
			<Navbar />
			<Hero />
			<Speezard />
			<Community />
			<Roadmap />
			<Mentors />
			<Stats />
			{/*
			<ProofOfBuild />
			<Projects />
			<Contact />
			*/}
			<Movements />
			<Testimonials />
			<Footer />
		</div>
	)
}

export default Home
