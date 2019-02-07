import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";
import { withRouter } from "react-router-dom";
import CityInfo from '../CityInfo/CityInfo.js';
import Navigation from '../Navigation/Navigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cityAction.js';


class Home extends Component {
	componentWillMount(){
		this.props.fetchCities();
	}

  
    render() {
        const infer = this.props.city.map((data, k) => (

            <div key={k} className="holder">
						
	    		<CityInfo CityData={data} key={data} {...this.props}/>
						
			</div>

        ))
   		console.log(this.props.citys.payload)
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
	        
	        </div>
        
        </div>
        );
    }
}

const mapStateToProps = state => ({
	citys: state.citys.cities
})
export default connect(mapStateToProps, { fetchCities })(withRouter(Home));