import Image from 'next/image'

import wordings from '../wordings'
const {
	community: { heading2, span, text },
} = wordings

const Community = () => {
	return (
		<section className="community" id="community">
			<div className="community__content">
				<h2 className="community__content-title">
					{heading2}
					<span>{span}</span>
				</h2>
				<h2 className="community__content-text">{text.p1}</h2>
				<h2 className="community__content-text">{text.p2}</h2>
			</div>
			<div className="community__img">
				<Image src="/community-img.svg" alt="" width={350} height={350} />
			</div>
		</section>
	)
}

export default Community
