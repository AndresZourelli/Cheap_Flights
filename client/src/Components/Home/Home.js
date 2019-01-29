import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";
import { withRouter } from "react-router-dom";
import CityInfo from '../CityInfo/CityInfo.js';
import Navigation from '../Navigation/Navigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tabs: [

                {
                    Boston: [{
                            id: 1,
                            mainImageUrl: 'http://www.wyndhambeaconhill.com/application/files/8614/6982/9173/explore.jpg',
                            departingCity: 'Boston',
                            arrivingDate: '10/23/13',
                            arrivingCity: 'Paris',
                            departingDate: '10/12/13',
                            flightDurationDeparting: '7',
                            flightDurationArriving: '6',
                            flightCost: '333',
                            uploadDate: '10/25/12',
                            websiteURL: 'http://localhost:3000/controlpanel'
                        },
                        {
                            id: 2,
                            mainImageUrl: 'http://www.wyndhambeaconhill.com/application/files/8614/6982/9173/explore.jpg',
                            departingCity: 'Boston',
                            arrivingDate: '10/23/13',
                            arrivingCity: 'Paris',
                            departingDate: '10/12/13',
                            flightDurationDeparting: '7',
                            flightDurationArriving: '6',
                            flightCost: '333',
                            uploadDate: '10/25/12',
                            websiteURL: 'http://localhost:3000/controlpanel'
                        }
                    ]
                }, {
                    LosAngeles: [{
                        id: 1,
                        mainImageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjLnf-v1IzgAhXRBjQIHU_LBbMQjRx6BAgBEAU&url=http%3A%2F%2Fwww.wyndhambeaconhill.com%2Fexplore&psig=AOvVaw2frrSp1os_XbL86MX2Kj49&ust=1548633696547999',
                        departingCity: 'Los Angeles',
                        arrivingDate: '10/23/13',
                        arrivingCity: 'Paris',
                        departingDate: '10/12/13',
                        flightDurationDeparting: '7',
                        flightDurationArriving: '6',
                        flightCost: '333',
                        uploadDate: '10/25/12',
                        websiteURL: 'http://localhost:3000/controlpanel'
                    }]
                }

            ]
        }
    };

    render() {
        const infer = this.state.Tabs.map((data, k) => (

            <div key={k} className="card_holder">
					{data[Object.keys(data)].map((info,i)=>(
						<div  className="holder" key={i}>
								<div key={info.id}>
	    							<CityInfo CityData={info} key={info.id} {...this.props}/>
	    						</div>
						</div>))
					}
			</div>

        ))
        return (
            <div>
	        <div className="Title-container">
	        <Navigation/>
	        	<div className='title-text'>
	        		<h1>Welcome to Cheap Flights</h1>
	        		<p>Where you can find the cheapest flights with no additional effort.</p>

	        	</div>
	        </div>
	        <div className='card-holder-style'>
	        	{infer}
	        </div>
        
        </div>
        );
    }
}

export default withRouter(Home);