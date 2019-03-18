import React from 'react';
import { connect } from 'react-redux';
import { specificCity } from '../../actions/cityAction.js';
import { withRouter } from 'react-router-dom';
import './CityData.css';
var pageChange = false;
const CityPage = (props) => {
	const flights = (props.citys.payload || []).map((flight) => (
		<div key={flight.id} >
			<div className="ticket">
					<div className="price-container">
						<div className="Price-data">
							<h2>
								<strong>${flight.flightcost}</strong> 
							</h2>
						</div>
						
					</div>
					<div className="image-container">
						<img src={flight.mainimageurl} alt=""/>
						<div className='shadowbox'>
						<h4>
							<strong>Arrival Flight Duration:</strong> {flight.flightdurationarriving}
						</h4>
						<h4>
							<strong>Departing Flight Duration:</strong> {flight.flightdurationdeparting}
						</h4>
						<h4>
							<strong>Website:</strong> {flight.websiteurl}
						</h4>
						<h4>
							<strong>Date Added:</strong> {flight.added}
						</h4>
						</div>
					</div>
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
				
				</div>
				
			
		</div>
	));
	
	if( pageChange===false ){
		props.GetSpecificCity(props.match.params.id);
		pageChange = true;
	}
	
	var cityName = []
	if (props.citys.payload) {
		
		cityName = props.citys.payload[0].departingcity;
	}
	console.log('hi')	
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
