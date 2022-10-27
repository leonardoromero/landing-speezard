import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from './sections/Hero'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<Navbar />
			<Hero />
		</div>
	)
}

export default Home
