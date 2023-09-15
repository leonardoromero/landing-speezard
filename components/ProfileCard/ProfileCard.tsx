import Image from 'next/image'
import Link from 'next/link'

import { ProfileCardProps } from '../types'

const ProfileCard = ({
	img,
	alt,
	heading6,
	description,
	links,
}: ProfileCardProps) => {
	return (
		<article className="profile-card">
			<Image
				src={`/mentors/${img}.jpeg`}
				alt={alt}
				width={200}
				height={200}
				className='profile-card__images'
			/>
			<h6 className="profile-card__title">{heading6}</h6>
			<div className="profile-card__social">
				{links.map(link => (
					<Link
						href={link.href}
						key={link.id}
						target={'_blank'}
						className='button'
					>
						<Image
							src='/icons/twitter-x.svg'
							alt="X-twitter"
							width={34}
							height={56}
						/>
						<h4>
							{link.text}
						</h4>
					</Link>
				))}
			</div>
			<p className="profile-card__description">{description}</p>
		</article>
	)
}

export default ProfileCard
