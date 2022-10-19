import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<Link href="/">
					<Image src="/logo-verde.png" alt="logo speezard" layout="fill" />
				</Link>
			</div>
			<div className="navbar__links">
				<Link href="#programa">
					<a>PROGRAMA</a>
				</Link>
				<Link href="#mentores">
					<a>MENTORES</a>
				</Link>
				<Link href="#proyectos">
					<a>PROYECTOS</a>
				</Link>
				<Link href="#ser-parte">
					<a>SER PARTE</a>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
