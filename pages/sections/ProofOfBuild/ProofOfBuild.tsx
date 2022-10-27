import wordings from '../../../utils/wordings'
const {
	proof_of_build: { span, heading2, texts, bullets },
} = wordings

const ProofOfBuild = () => {
	return (
		<section className="proofofbuild" id="proofofbuild">
			<div className="proofofbuild__right">
				{bullets.map(bullet => (
					<div className="proofofbuild__right__bullet" key={bullet.id}>
						<h5>{bullet.heading5}</h5>
						<p>{bullet.text}</p>
					</div>
				))}
			</div>
			<div className="proofofbuild__left">
				<h2 className="proofofbuild__left-title">
					<span>{span}</span>
					{heading2}
				</h2>
				<div className="proofofbuild__left__texts">
					{texts.map(text => (
						<p key={text.id}>{text.p}</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProofOfBuild
