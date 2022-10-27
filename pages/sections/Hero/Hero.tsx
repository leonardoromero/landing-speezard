import Image from 'next/image'

const Hero = () => {
	return (
		<section id="hero" className="hero">
			<div className="hero__texts">
				<h1 className="hero__texts-title">
					Hacemos crecer tu start up Web3 en <span>comunidad.</span>
				</h1>
				<p className="hero__texts-text">
					Lanzamos el primer programa pre-acelerador de startups Web3 que pone
					una comunidad mínima viable al servicio de nuevos emprendimientos en
					el ecosistema.
				</p>
			</div>
			<div className="hero__footer">
				<p>Powered by</p>
				<Image
					src="/logos/logo-resiliente-blanco.png"
					alt="logo comunidad resiliente"
					width={250}
					height={45}
				/>
			</div>
		</section>
	)
}

export default Hero
