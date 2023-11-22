import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
	// take out tours from props

	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{/* map over tours and display UI */}
				
                {props.tours.map((tour,index)=>{
                    return <Tour id={tour.id} name={tour.name}image={tour.image} info={tour.info} price={tour.price}/>
                })}
				{/* read instructions how UI should look */}
			</div>
		</section>
	)
}

export default Tours
