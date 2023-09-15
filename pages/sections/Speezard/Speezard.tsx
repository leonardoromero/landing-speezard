import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import wordings from '../../../utils/wordings'
const {
	speezard: { heading2,heading3, span, span2, alt, items, subtitle, why },
} = wordings


const Speezard = () => {
	return (
		<section className="speezard" id="speezard">
			<div className="speezard__top">
				<div className="speezard__top-left">
					<h2 className="speezard__top-left-title">
						{heading2} <span>{span}</span>?
					</h2>
					<h5 className="speezard__top-left-subtitle">
						{subtitle}
					</h5>
					{why.map(item => (
						<div key={item.id}>
							<h2 className="speezard__top-left-subtext">
								{item.heading5}
							</h2>
							<p className="speezard__top-left-text">
								{item.text}
							</p>
						</div>
					))}
				</div>
				<div className="speezard__top-right">
					<div className='first'>
						<Image
						src="/vectorsV1.5/group-98.svg"
						width={600}
						height={400}
						alt='background'
					/>
					</div>
					<div className="second">
						<Image
							src="/vectorsV1.5/Man_1_.svg"
							width={300}
							height={200}
							alt='Man'
						/>
					</div>
				</div>
			</div>
			<div className="speezard__bottom">
				<h2 className="speezard__bottom-title">
					{heading3} <span>{span2}</span>
				</h2>
				<div className="speezard__bottom__slider">
					<Swiper
						navigation={true}
						modules={[Navigation]}
						breakpoints={{
							320: { slidesPerView: 1 },
							724: { slidesPerView: 1 },
							900: { slidesPerView: 1 },
							1024: { slidesPerView: 2 },
							1200: { slidesPerView: 2 },
							1324: { slidesPerView: 3 },
						}}
					>
						{items.map(item => (
							<SwiperSlide key={item.id}>
								<article className="reason-card">
									<h5 className="reason-card-title">
										{item.heading5}
									</h5>
									<Image 
										src={item.image}
										width={340}
										height={240}
										alt={item.alt}
										className="reason-card-images"
									/>
									<p className="reason-card-description">
										{item.text}
									</p>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Speezard
