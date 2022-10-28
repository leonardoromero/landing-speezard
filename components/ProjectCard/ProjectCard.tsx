import Image from 'next/image'
import Link from 'next/link'

import { ProjectCardProps } from '../types'

const ProjectCard = ({
	img,
	alt,
	heading6,
	description,
	links,
}: ProjectCardProps) => {
	return (
		<article className="project-card">
			<Image
				src={`/logos/projects/${img}.png`}
				alt={alt}
				width={250}
				height={250}
			/>
			<h6 className="project-card__title">{heading6}</h6>
			<p className="project-card__description">{description}</p>
			<div className="project-card__social">
				{links.map(link => (
					// Agregar iconos en local
					<Link href={link.href} key={link.id}>
						{link.text}
					</Link>
				))}
			</div>
		</article>
	)
}

export default ProjectCard
