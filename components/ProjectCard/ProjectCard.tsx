import Image from 'next/image'
import Link from 'next/link'

import { ProjectCardProps } from '../types'

const ProjectCard = ({
	img,
	alt,
	heading6,
	description,
	links,
}: ProjectCardProps) => (
	<article className="project-card">
		<Image
			src={`/logos/projects/${img}.png`}
			alt={alt}
			width={250}
			height={250}
		/>
		<h6 className="project-card__title">{heading6}</h6>
		<div className="project-card__social">
			{links.map(link => (
				<>
					<Image
						src={`/icons/${link.icon}.svg`}
						alt=""
						width={18}
						height={18}
					/>
					<Link href={link.href} key={link.id}>
						<a target={'_blank'}>
							{link.text}
						</a>
					</Link>
				</>
			))}
		</div>
		<p className="project-card__description">{description}</p>
	</article>
)

export default ProjectCard
