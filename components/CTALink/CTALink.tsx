import { CTALinkProps } from '../types'

const CTALink = ({ text }: CTALinkProps) => {
	return <a className="cta">{text}</a>
}

export default CTALink
