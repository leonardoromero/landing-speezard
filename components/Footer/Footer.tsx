import Image from 'next/image'
import Link from 'next/link'
import wordings from '../wordings'
import FooterLink from './FooterLink'
const {
	footer: {
		logo,
		logo2,
		alt,
		text,
		links: { col1, col2, col3 },
		bottom,
	},
} = wordings

const Footer = () => {
	return (
		<section className="footer" id="footer">
			<div className="footer__top">
				<div className="footer__top-left">
					<Image
						src={`/${logo}`}
						alt={alt}
						width={250}
						height={50}
					/>
					<Image
						src={`/${logo2}`}
						alt={alt}
						width={250}
						height={50}
					/>
					<p>{text}</p>
				</div>
				<div className="footer__top-right">
					<div className="footer__top-right-col">
						{col1.map(link => (
							<FooterLink key={link.id} {...link} />
						))}
					</div>
					<div className="footer__top-right-col">
						{col2.map(link => (
							<FooterLink key={link.id} {...link} />
						))}
					</div>
					<div className="footer__top-right-col">
						{col3.map(link => (
							<FooterLink key={link.id} {...link} />
						))}
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom-social">
					{bottom.social.map(link => (
						<Link
							href={link.href}
							key={link.id}
							rel="noreferrer"
							target={'_blank'}
						>
							<Image
								src={`/icons/${link.icon}.svg`}
								alt={`${link.icon} icon`}
								width={40}
								height={40}
							/>
						</Link>
					))}
				</div>
				<p>
					{bottom.text}
					<Link
						href="https://bit.ly/TwitterResiliente"
						target={'_blank'}
						className='footer__bottom-span2'
					>
						{bottom.span2}
					</Link>
					by
					<span>
						<Link
							href="https://bit.ly/TwitterResiliente"
							target={'_blank'}
						>
							{bottom.span}
						</Link>
					</span>
				</p>
				
			</div>
		</section>
	)
}

export default Footer
