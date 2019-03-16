import React from 'react';
import { connect } from 'react-redux';
import { specificCity } from '../../actions/cityAction.js';
import { withRouter } from 'react-router-dom';
import './CityData.css';
const CityPage = (props) => {
	const flights = (props.citys.payload || []).map((flight) => (
		<div key={flight.id} >
			<div className="ticket">
				<div className="image-container">{/* <img src={props.citys.payload.mainImageUrl} alt=""/> */}</div>
				<h2>
					<strong>Traveling To:</strong> {flight.arrivingcity}
				</h2>
				<h2>
					<strong>Arrival Flight Duration:</strong> {flight.flightdurationarriving}
				</h2>
				<h2>
					<strong>Arrival Flight Date:</strong> {flight.arrivingdate}
				</h2>
				<h2>
					<strong>Departing Date:</strong> {flight.departingdate}
				</h2>
				<h2>
					<strong>Departing Flight Duration:</strong> {flight.flightdurationdeparting}
				</h2>
				<h2>
					<strong>Flight Cost:</strong> {flight.flightcost}
				</h2>
				<h2>
					<strong>Website:</strong> {flight.websiteurl}
				</h2>
				<h2>
					<strong>Date Added:</strong> {flight.added}
				</h2>
				<br />
				<div className='shadowbox'>
					grey shadow
				</div>
			</div>
			
		</div>
	));
	(props.GetSpecificCity(props.match.params.id))
		console.log(props)
	var cityName = []
	if (props.citys.payload) {
		cityName = props.citys.payload[0].departingcity;
	}
		
	const red = props.citys.payload;
	return (
		<div>
			<div className="Title">
				<h1>Flights from {cityName}</h1>
			</div>
			<div className='CardContainer'>
				{red === undefined && (
					<div>
						<h1>loading....</h1>
					</div>
				)}
				
				{red !== undefined && (
					<div className="CardContainer">{flights}</div>

				)}
			</div>
			
		
		</div>
	);
};
const mapStateToProps = (state, ownProps) => ({
	citys: state.citys.cities,
	query: ownProps.match.id
});

const mapDispatchToProps = (dispatch) => {
	return{
		GetSpecificCity: (cityName) =>{
			dispatch(specificCity(cityName))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(CityPage));
