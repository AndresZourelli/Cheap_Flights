import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cityAction.js';
import { withRouter } from "react-router-dom";

const CityPage =(props)=>{

    
	console.log("number",props);
	return(
		<div className="MainCity">
			<div className="image-container">
				<img src={props.mainImageUrl} alt={props.id}/>
			</div>
			<div className="ticket">
				<h1>Boston</h1>
				<h2>Arrival Destination: Paris</h2>
				<h2>Arrival Flight Duration: 7 hours</h2>
				<h2>Arrival Flight Date: 9/8/2012</h2>
				<h2>Departing Date: 10/12/2012</h2>
				<h2>Departing Flight Duration: 7 hours</h2>
				<h2>Flight Cost: $400</h2>
				<h2>Website</h2>
				<h2>Data Added</h2>
				
			</div>
			
			
		</div>)
}
const mapStateToProps = state => ({
	citys: state.citys.cities
})

export default withRouter(connect(mapStateToProps, { fetchCities })(CityPage));

