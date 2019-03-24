import React from 'react';

const FlightCard = (props) => {
	const flight = props.flightInfo;
	const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
	return (
		<div key={flight.id} className="CityData-items">
			<div className="ticket">
				<a className="website-link" href={flight.websiteurl}>
					<div className="price-container">
						<div className="Price-data">
							<h2>
								<strong>${flight.flightcost}</strong>
							</h2>
						</div>
					</div>
					<div className="image-container">
						<img src={flight.mainimageurl} alt="" />
						<div className="shadowbox">
							<div className="CityData-flight-travel-info-parent">
								<i className="fas fa-plane-departure fa-lg airplane" />{' '}
								<h4 className="flight-travel-info">
									<strong>
										<div className="CityData-back-airport-flight-travel-info">
											<div>8:40pm</div>
											{flight.departingairportname}
										</div>

										<div className="CityData-back-text-line-flight-travel-info">
											{flight.flightdurationdeparting}

											<div className="CityData-back-text-line" />
										</div>
										<div className="CityData-back-airport-flight-travel-info">
											<div>8:40pm</div>
											{flight.arrivingairportname}
										</div>
									</strong>
								</h4>
							</div>
							<div className="CityData-flight-travel-info-parent">
								<i className="fas fa-plane-arrival fa-lg airplane" />{' '}
								<h4 className="flight-travel-info">
									<strong>
										<div className="CityData-back-airport-flight-travel-info">
											<div>7:40pm</div>
											{flight.arrivingairportname}
										</div>
										<div className="CityData-back-text-line-flight-travel-info">
											{flight.flightdurationarriving}
											<div className="CityData-back-text-line" />
										</div>
										<div className="CityData-back-airport-flight-travel-info">
											<div>8:40pm</div>
											{flight.departingairportname}
										</div>
									</strong>
								</h4>
							</div>
							<h4>
								<strong>Date Added:</strong> {flight.added}
							</h4>
						</div>
					</div>
					<div className="Title_Date">
						<h2>
							&ensp;
							<strong> {flight.arrivingcity}</strong>
						</h2>
						<h5>
							<span className="CityData-text-subtext">
								<i className="fas fa-calendar" />
								<strong>
									{' '}
									{months[new Date(flight.arrivingdate).getMonth()] +
										' ' +
										new Date(flight.arrivingdate).getDay() +
										' ' +
										new Date(flight.arrivingdate).getFullYear()}
								</strong>
								<strong> &ndash; </strong>
								<strong>
									{months[new Date(flight.departingdate).getMonth()] +
										' ' +
										new Date(flight.departingdate).getDay() +
										' ' +
										new Date(flight.departingdate).getFullYear()}
								</strong>
							</span>
							<br />
							<span className="CityData-text-subtext">
								<i className="fas fa-bed" />
								<strong> Days: </strong>
								<strong>
									{(new Date(flight.departingdate) - new Date(flight.arrivingdate)) / 86400 / 1000}
								</strong>
							</span>
						</h5>
					</div>
				</a>
			</div>
		</div>
	);
};

export default FlightCard;
