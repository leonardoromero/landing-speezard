import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Community from './sections/Community'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import ProofOfBuild from './sections/ProofOfBuild'
import Speezard from './sections/Speezard'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import Mentors from './sections/Mentors'
import Contact from './sections/Contact'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<NextSeo
				title="Speezard 🦎 Pre-incubadora Web3.0"
				description="Speezard es una pre-incubadora de start-ups web3 en LATAM que pone una comunidad mínima viable al servicio del ecosistema."
				canonical="https://www.speezard.io/"
				
			/>
			<Navbar />
			<Hero />
			<Speezard />
			<Community />
			<ProofOfBuild />
			<Projects />
			<Stats />
			{/* <Testimonials /> */}
			<Mentors />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
