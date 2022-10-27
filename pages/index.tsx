import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Community from './sections/Community'
import Hero from './sections/Hero'
import ProofOfBuild from './sections/ProofOfBuild'
import Speezard from './sections/Speezard'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<Navbar />
			<Hero />
			<Speezard />
			<Community />
			<ProofOfBuild />
		</div>
	)
}

export default Home
