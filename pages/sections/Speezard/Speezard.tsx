import Image from 'next/image'

const Speezard = () => {
	return (
		<section className="speezard" id="speezard">
			<div className="speezard__top">
				<h2 className="speezard__top-title">
					¿Por qué elegir Speezard para tu <span>start-up</span>?
				</h2>
				<Image
					src="/speezard-img.svg"
					width={700}
					height={600}
					alt="imagen abstracta de un espiral de colores"
				/>
			</div>
			<div className="speezard__bottom">
				<div className="speezard__bottom-item">
					<h5 className="speezard__bottom-item-title">
						Escuchamos tu necesidad
					</h5>
					<p className="speezard__bottom-item-text">
						Desde el inicio te ayudamos a darle forma a tu idea.
					</p>
				</div>
				<div className="speezard__bottom-item">
					<h5 className="speezard__bottom-item-title">
						Co-creamos en comunidad
					</h5>
					<p className="speezard__bottom-item-text">
						Ponemos a nuestra comunidad al servicio de tu proyecto.
					</p>
				</div>
				<div className="speezard__bottom-item">
					<h5 className="speezard__bottom-item-title">
						Te impulsamos a ir por más
					</h5>
					<p className="speezard__bottom-item-text">
						Te contactamos con potenciales inversores del ecosistema cripto.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Speezard
