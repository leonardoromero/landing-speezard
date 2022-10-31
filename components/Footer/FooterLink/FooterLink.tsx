import Link from 'next/link'

import { Link as ScrollLink } from 'react-scroll'

import { FooterLinkProps } from '../../types'

const FooterLink = ({ external, href, text }: FooterLinkProps): JSX.Element => {
	if (external) return <Link href={href}>{text}</Link>

	return (
		<ScrollLink smooth={true} offset={-50} duration={500} to={href}>
			{text}
		</ScrollLink>
	)
}

export default FooterLink
