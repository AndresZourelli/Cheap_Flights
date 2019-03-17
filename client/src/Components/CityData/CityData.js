import React from 'react';
import { connect } from 'react-redux';
import { specificCity } from '../../actions/cityAction.js';
import { withRouter } from 'react-router-dom';
import './CityData.css';
const CityPage = (props) => {
	const flights = (props.citys.payload || []).map((flight) => (
		<div key={flight.id} >
			<div className="ticket">
				<div className="price">
					<h2>
						<strong>${flight.flightcost}</strong> 
					</h2>
				</div>
				<div className="image-container"><img src={flight.mainimageurl} alt=""/></div>
				<div className='Title_Date'>
					<h2>
						&ensp; 
						<strong> {flight.arrivingcity}</strong> 
					</h2>
					<br/>
					<h4>
						&emsp;
						&emsp;
						<strong>{flight.arrivingdate}</strong> 
						<strong>-</strong> 
						<strong>{flight.departingdate}</strong> 
					</h4>
				</div>
				<div className='shadowbox'>
					grey shadow
					<h2>
						<strong>Arrival Flight Duration:</strong> {flight.flightdurationarriving}
					</h2>
					<h2>
						<strong>Departing Flight Duration:</strong> {flight.flightdurationdeparting}
					</h2>
					<h2>
						<strong>Website:</strong> {flight.websiteurl}
					</h2>
					<h2>
						<strong>Date Added:</strong> {flight.added}
					</h2>
				</div>
			</div>
			
		</div>
	));
	(props.GetSpecificCity(props.match.params.id))
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
const mapStateToProps = (state) => ({
	citys: state.citys.cities
});

const mapDispatchToProps = (dispatch) => {
	return{
		GetSpecificCity: (cityName) =>{
			dispatch(specificCity(cityName))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(CityPage));
