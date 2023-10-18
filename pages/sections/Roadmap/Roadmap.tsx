import { useState, useEffect } from 'react'
import Image from 'next/image'

import Contact from '../../../components/Contact';

import { Size } from '../../../components/types'
import wordings from '../../../utils/wordings'

const {
	roadmap: { heading2, heading3, span, span2, alt, text },
} = wordings

const Roadmap = () => {
	const size: Size = useWindowSize()

	function useWindowSize(): Size {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState<Size>({
			width: undefined,
			height: undefined,
		})
		useEffect(() => {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			}
			// Add event listener
			window.addEventListener('resize', handleResize)
			// Call handler right away so state gets updated with initial window size
			handleResize()
			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize)
		}, []) // Empty array ensures that effect is only run on mount
		return windowSize
	}

	return (
		<section className='roadmap' id='roadmap'>
			<div className="roadmap__top">
				<div className='roadmap__top__left'>
					<h2 className='roadmap__top__left-title'>
						<span>{span}</span>
						{heading2}
					</h2>
					<h3 className='roadmap__top__left-text'>
						{text.p1}
					</h3>
				</div>
				<div className="roadmap__top__right">
						<Image
							src="/vectorsV1.5/lamp.svg"
							width={140}
							height={140}
							alt='lamp'
							className="roadmap__top__right-lamp"
						/>
						<Image
							src="/vectorsV1.5/top-gear.svg"
							width={100}
							height={100}
							alt='top-gear'
							className='roadmap__top__right-top-gear'
						/>
						<Image
							src="/vectorsV1.5/bottom-gear.svg"
							width={120}
							height={120}
							alt='bottom-gear'
							className='roadmap__top__right-bottom-gear'
						/>
				</div>
			</div>
			<div className="roadmap__middle">
				{size.width! <= 900 ? (
					<Image
						src="/vectorsV1.5/roadmap-phone.svg"
						width={300}
						height={1200}
						alt={alt}
					/>
				) : (
					<Image
						src="/vectorsV1.5/roadmap.svg"
						width={1000}
						height={800}
						alt={alt}
						className='roadmap__middle-road'
					/>
				)}
			</div>
			<div className='roadmap__bottom'>
				<div className='roadmap__bottom__left'>
					<div>	
						<Image
							src="/vectorsV1.5/element_2_.svg"
							width={40}
							height={40}
							alt={alt}
						/>
						<Image
							src="/vectorsV1.5/element_1_.svg"
							width={40}
							height={40}
							alt={alt}
						/>
					</div>
					<h2 className='roadmap__bottom__left-title'>
						¿{heading3}
						<span>{span2}</span>?
					</h2>
					<h3 className='roadmap__bottom__left-text'>
						{text.p2}
					</h3>
				</div>
				<div className='roadmap__bottom__right'>
					<Contact ctaText="¡Postulate ahora!" buttonColor="$base" />
				</div>
			</div>
		</section>
	)
}

export default Roadmap