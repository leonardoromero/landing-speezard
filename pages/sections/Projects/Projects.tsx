import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import wordings from '../../../utils/wordings'
import ProjectCard from '../../../components/ProjectCard'
const {
	projects: { heading2, span, projects },
} = wordings

const Projects = () => {
	
	return (
		<section className="projects" id="projects">
			<h2 className="projects__title">
				Los
				<span>{span}</span>
				{heading2}
			</h2>
			<div className="projects__slider">
				<Swiper
					spaceBetween={-50}
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
					{projects.map(project => (
						<SwiperSlide key={project.id}>
							<ProjectCard {...project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Projects
