import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {

	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
            {tours.map((tour) => {
                return <Tour removeTour={removeTour} id={tour.id} name={tour.name} image={tour.image} info={tour.info} price={tour.price} />
            })}
			</div>
		</section>
	)
}

export default Tours
