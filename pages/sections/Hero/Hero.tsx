import Image from 'next/image'

import wordings from '../wordings'
const {
	hero: { heading1, span, text, footer },
} = wordings

const Hero = () => {
	return (
		<section id="hero" className="hero">
			<div className="hero__texts">
				<h1 className="hero__texts-title">
					{heading1} <span>{span}</span>
				</h1>
				<p className="hero__texts-text">{text}</p>
			</div>
			<div className="hero__footer">
				<p>{footer.text}</p>
				<Image
					src="/logos/logo-resiliente-blanco.png"
					alt={footer.alt}
					width={250}
					height={45}
				/>
			</div>
		</section>
	)
}

export default Hero
