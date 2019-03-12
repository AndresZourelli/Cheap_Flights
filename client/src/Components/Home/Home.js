import React, { Component } from 'react';
import "./Home.css";
import { withRouter } from "react-router-dom";
import CityInfo from '../CityInfo/CityInfo.js';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';
class Home extends Component {
    render() {
        const infer = (this.props.citys.payload || []).map((data, k) => (
            <div key={k} className="holder">	
	    		<CityInfo CityData={data} key={data} {...this.props}/>
			</div>
        ));
        return (
            <div>
	        <div className="Title-container">
	        <Navigation/>
	        	<div className='title-text'>
	        		<h1>Welcome to Cheap Flights</h1>
	        		<p>Where you can find the cheapest flights with no additional effort.</p>
	        	</div>
	        </div>
	        <div className="card_holder">
				{infer}
	        </div>
        
        </div>
        );
    }
}

const mapStateToProps = state => ({
	citys: state.citys.cities
})
export default connect(mapStateToProps)(withRouter(Home));