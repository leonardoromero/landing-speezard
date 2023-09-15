"use client";

import Contact from '../../../components/Contact';

import wordings from '../../../utils/wordings'
const {
	hero: { heading1, span, text, cta },
} = wordings

const Hero = () => {

	return (
		<section id="hero" className="hero">
			<div className="hero__texts">
				<h1 className="hero__texts-title">
					{heading1}
					<span>
						{span}
					</span>
				</h1>
				<p className="hero__texts-text">{text}</p>
			</div>
			<div className="hero__footer">
				<Contact ctaText="Postulate ahora!" buttonColor="$base" />
			</div>
		</section>
	)
}

export default Hero
