
import React, { useState } from 'react'

const Tour = (props) => {
	const { id, image, info, price, name } = props

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				{/* make modifications here */}
				<p>
					{info}
					<button className='read-more'>read more</button>
				</p>
				<button className="delete-btn">Not Interested</button>
			</footer>
		</article>
	)
}

export default Tour
