import { CTALinkProps } from '../types'

/*
	El código que estaba en este CTA se pasó al componente < Contact />
	y los estilos se pasaron a index.scss para que puedan ser tomados
	toda la web
*/

const CTALink = ({ text }: CTALinkProps) => {
	
	return (
		<>
			<a>
				{text}
			</a>
		</>
	)
}

export default CTALink
