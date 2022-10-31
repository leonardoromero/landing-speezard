import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import wordings from '../../../utils/wordings'
import ProfileCard from '../../../components/ProfileCard'

const {
    mentors: { heading2, span, text, profiles },
} = wordings

const Mentors = () => {
    return (
        <section className="mentors" id="mentors">
                <h2 className="mentors__title">
                    Los
                    <span> {span} </span>
                    {heading2}
                </h2>
                <p className="mentors__title-text">
                    {text}
                </p>
                <div className="mentors__slider">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					breakpoints={{
						320: { slidesPerView: 1 },
						724: { slidesPerView: 2 },
						900: { slidesPerView: 3 },
						1024: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
						1324: { slidesPerView: 4 },
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