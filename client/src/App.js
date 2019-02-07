import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CityInfo from "./Components/CityInfo/CityInfo.js";
import Info_Card from "./Components/Info_Card/Info_Card.js";
import City_Page from "./Components/Input/Input.js";
import ControlPanel from './Components/controlPanel/controlPanel.js';
import Navigation from './Components/Navigation/Navigation.js';
import store from "./store/store.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {


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
            ],
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
    }

    render() {
        const location = this.props.location;
        return (
        <Provider store={store}>
          <div className="App">
            <div className="view-container">
            <TransitionGroup>
              <CSSTransition timeout={450}>
                <Switch location={location}>
                  <Route exact path="/" render={(props)=> <Home {...props} Data={this.state}/>}/>
                  <Route  path="/location/:id" render={(props)=> <City_Page {...props} Data={this.state}/>}/>
                  <Route  path="/ControlPanel" component={ControlPanel}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            </div>
          </div>
        </Provider>

        );
    }
}

export default withRouter(App);