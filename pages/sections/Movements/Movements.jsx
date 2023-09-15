import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import Image from 'next/image'
import Bitconf from '../../../public/movements/bitconf.jpeg'
import Kingofdevs from '../../../public/movements/kingofdev.jpeg'
import Modular from '../../../public/movements/modular.jpeg'

import wordings from '../../../utils/wordings'

const {
    movements: { heading2, span },
} = wordings

function Movements() {

    const movement = [
		{
            id: 1,
            src: Bitconf,
            alt: 'Bitconf 2022',
            title: 'BITCONF 2022',
            text: 'el evento más esperado por la comunidad cripto latinoamericana por ser el más internacional y por su vibra especial que combina la tecnología y el conocimiento con el entretenimiento y la cultura local.',
        },
        {
            id: 2,
            src: Kingofdevs,
            alt: 'King of Devs',
            title: 'King of Devs 2.0',
            text: 'Participamos de la conocida hackathon King of Devs que se realizó en 2022, donde conocimos personas increíbles y pudimos unir grupos e ideas para avanzar en materia blockchain a nivel nacional.',
        },
        {
            id: 3,
            src: Modular,
            alt: 'Modular',
            title: 'Modular - Ripio',
            text: 'Organizado por la empresa cripto líder regional Ripio, tuvimos la oportunidad de aportar equipos y mentores a la hackathon y participar del evento Summit para hablar en profundidad del potencial de la tecnología blockchain, las criptomonedas, los últimos avances en Web3.',
        },
	];

    return (
        <section className="movements" id="Movements">
            <div className='top'>
                <h2 className="heading">
					{heading2}
                    <span> {span} </span>
				</h2>
            </div>
            <div className="slider">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					breakpoints={{
						320: { slidesPerView: 1 },
						724: { slidesPerView: 1 },
						900: { slidesPerView: 1 },
						1024: { slidesPerView: 2 },
						1200: { slidesPerView: 2 },
						1324: { slidesPerView: 3 },
					}}
				>
					{movement.map(m => (
                        <SwiperSlide key={m.id} >
                            <article className="event-card">
                                <Image
                                    src={m.src}
                                    alt={m.alt}
                                    width={340}
                                    height={340}
                                    className='event-card__images'
                                />
                                <h3 className='event-card__title'>{m.title}</h3>
                                <p className='event-card__description'>{m.text}</p>
                            </article>
                        </SwiperSlide>
					))}
				</Swiper>
			</div>
        </section>
    )
}

export default Movements