import Image from 'next/image'

import wordings from '../../../utils/wordings'
const {
	community: { heading2, span, alt, text },
} = wordings

const Community = () => {
	return (
		<section className="community" id="community">
				<div className="community__content">
					<h2 className="community__content-title">
						{heading2}
						<span>{span}</span>
					</h2>
					<h2 className="community__content-text">
						{text.p1}
					</h2>
				</div>
				<div className="community__img">
					<div className='background'>
						<Image
							src="/vectorsV1.5/group-105.svg"
							width={600}
							height={400}
							alt={alt}
						/>
					</div>
					<div className='girl'>
						<Image
							src="/vectorsV1.5/Woman_2_.svg"
							width={250}
							height={200}
							alt={alt}
						/>
					</div>
					<div className='element'>
						<Image
							src="/vectorsV1.5/Element_4_.svg"
							width={80}
							height={80}
							alt={alt}
						/>
					</div>
					<div className='guy'>
						<Image
							src="/vectorsV1.5/Man.svg"
							width={250}
							height={200}
							alt={alt}
						/>
					</div>
				</div>
		</section>
	)
}

export default Community
