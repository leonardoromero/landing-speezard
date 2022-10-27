import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from './sections/Hero'
import Speezard from './sections/Speezard'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<Navbar />
			<Hero />
			<Speezard/>
		</div>
	)
}

export default Home
