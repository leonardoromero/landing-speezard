import Image from 'next/image'

import wordings from '../../../components/wordings'
const {
	speezard: { heading2, span, alt, items },
} = wordings

const Speezard = () => {
	return (
		<section className="speezard" id="speezard">
			<div className="speezard__top">
				<h2 className="speezard__top-title">
					{heading2} <span>{span}</span>?
				</h2>
				<Image src="/speezard-img.svg" width={700} height={600} alt={alt} />
			</div>
			<div className="speezard__bottom">
				{items.map(item => (
					<div className="speezard__bottom-item" key={item.id}>
						<h5 className="speezard__bottom-item-title">{item.heading5}</h5>
						<p className="speezard__bottom-item-text">{item.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Speezard
