import wordings from '../../../utils/wordings'
const { stats } = wordings

const Stats = () => {
	return (
		<section className="stats" id="stats">
			{stats.map(stat => (
				<div className="stats__stat" key={stat.number}>
					<h3>{stat.number}</h3>
					<h4>{stat.text}</h4>
				</div>
			))}
		</section>
	)
}

export default Stats
