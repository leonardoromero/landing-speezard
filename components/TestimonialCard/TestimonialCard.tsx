import Image from 'next/image'
import Link from 'next/link'

import { TestimonialCardProps } from '../types'

const TestimonialCard = ({
	text,
	person: { name, img, description, href },
}: TestimonialCardProps) => {
	return (
		<article className="testimonial-card">
			<div className="testimonial-card__person">
				<Image
					src={`/testimonials/${img}.png`}
					alt=""
					width={140}
					height={140}
					className="icon"
				/>
				<div className='testimonial-card__person-social'>
					<Link
						href={href}
						rel="noreferrer"
						target={'_blank'}
						className='button'
					>
						<Image
							src='/icons/twitter-x.svg'
							alt="X-twitter"
							width={34}
							height={54}
						/>
						<h4 className="testimonial-card__person-title">
							{name}
						</h4>
					</Link>
				</div>
				<p className="testimonial-card__person-description">{description}</p>
			</div>
			<p className="testimonial-card__text">{text}</p>
		</article>
	)
}

export default TestimonialCard
