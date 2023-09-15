import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import Image from 'next/image'

import wordings from '../../../utils/wordings'
import ProfileCard from '../../../components/ProfileCard'

const {
    mentors: { heading2, span, text, profiles },
} = wordings

const Mentors = () => {
    return (
        <section className="mentors" id="mentors">
			<div className='mentors__top'>
				<div className='mentors__top-left'>
					<h2 className="mentors__top-left__title">
						<span> {span} </span>
						{heading2}
					</h2>
					<p className="mentors__top-left__title-text">
						{text}
					</p>
				</div>
				<div className='mentors__top__right'>
					<Image
						src="/vectorsV1.5/arrows.svg"
						width={400}
						height={400}
						alt="asd"
					/>
				</div>
			</div>
            <div className="mentors__slider">
				<Swiper
					navigation={true}
					modules={[Navigation, Autoplay]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false
					}}
					breakpoints={{
						320: { slidesPerView: 1 },
						724: { slidesPerView: 2 },
						900: { slidesPerView: 3 },
						1024: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
						1324: { slidesPerView: 5 },
					}}
				>
					{profiles.map(profile => (
						<SwiperSlide key={profile.id}>
							<ProfileCard {...profile} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
        </section>
    )
}

export default Mentors