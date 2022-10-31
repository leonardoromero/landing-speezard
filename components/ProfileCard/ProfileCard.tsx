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
				src={`/logos/profiles/${img}.png`}
				alt={alt}
				width={250}
				height={250}
			/>
			<h6 className="profile-card__title">{heading6}</h6>
			<p className="profile-card__description">{description}</p>
			<div className="profile-card__social">
				{links.map(link => (
					<Link href={link.href} key={link.id}>
						{link.text}
					</Link>
				))}
			</div>
		</article>
	)
}

export default ProfileCard