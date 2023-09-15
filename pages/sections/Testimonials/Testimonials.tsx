import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'

import wordings from '../../../utils/wordings'
import TestimonialCard from '../../../components/TestimonialCard'
const {
	testimonials: { heading2, testimonials },
} = wordings

const Testimonials = () => {
	return (
		<section className="testimonials" id="testimonials">
			<h2 className="testimonials__title">{heading2}</h2>
			<Swiper 
				navigation={true}
				modules={[Navigation, Autoplay]}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false
				}}
				breakpoints={{
					320: { slidesPerView: 1 },
					724: { slidesPerView: 1 },
					900: { slidesPerView: 2 },
					1024: { slidesPerView: 2 },
					1200: { slidesPerView: 2 },
					1324: { slidesPerView: 2 },
				}}>
				{testimonials.map(testimonial => (
					<SwiperSlide key={testimonial.id} className="slide">
						<TestimonialCard {...testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Testimonials
