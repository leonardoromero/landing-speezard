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
			<Image src={`/mentors/${img}.jpeg`} alt={alt} width={250} height={250} />
			<h6 className="profile-card__title">{heading6}</h6>
			<div className="profile-card__social">
				<Image src='/icons/twitter-color.svg' alt="" width={18} height={18} />
				{links.map(link => (
					<Link href={link.href} key={link.id}>
						<a target={'_blank'}>
							{link.text}
						</a>
					</Link>
				))}
			</div>
			<p className="profile-card__description">{description}</p>
		</article>
	)
}

export default ProfileCard
