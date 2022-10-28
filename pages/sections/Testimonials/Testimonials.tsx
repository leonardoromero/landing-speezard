import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import wordings from '../../../utils/wordings'
import TestimonialCard from '../../../components/TestimonialCard'
const {
	testimonials: { heading2, testimonials },
} = wordings

const Testimonials = () => {
	return (
		<section className="testimonials" id="testimonials">
			<h2 className="testimonials__title">{heading2}</h2>
			<Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
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
