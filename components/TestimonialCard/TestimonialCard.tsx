import Image from 'next/image'

import { TestimonialCardProps } from '../types'

const TestimonialCard = ({
	text,
	person: { name, description },
}: TestimonialCardProps) => {
	return (
		<article className="testimonial-card">
			<p className="testimonial-card__text">{text}</p>
			<div className="testimonial-card__person">
				<Image
					src="/icons/person-circle.svg"
					alt=""
					width={75}
					height={75}
					className="icon"
				/>
				<h6 className="testimonial-card__person-title">{name}</h6>
				<p className="testimonial-card__person-description">{description}</p>
			</div>
		</article>
	)
}

export default TestimonialCard
