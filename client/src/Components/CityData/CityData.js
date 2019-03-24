import React, { Component } from 'react';
import { connect } from 'react-redux';
import { specificCity, clearCity } from '../../actions/cityAction.js';
import { withRouter } from 'react-router-dom';
import './CityData.css';
import Navigation from '../Navigation/Navigation';
class CityPage extends Component {
	componentDidMount() {
		this.props.GetSpecificCity(this.props.match.params.id);
		window.scrollTo(0, 0);
	}
	componentWillUnmount() {
		this.props.ClearCity();
	}

	render() {
		const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
		const flights = (this.props.citys.payload || []).map((flight) => (
			<div key={flight.id} className="CityData-items">
				<div className="ticket">
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
								<i class="fas fa-plane-departure fa-lg" />{' '}
								<h4 className="flight-travel-info">
									<strong>
										{flight.departingairportname}
										<div className="CityData-back-text-line-flight-travel-info">
											{flight.flightdurationdeparting}

											<div className="CityData-back-text-line" />
										</div>
										{flight.arrivingairportname}
									</strong>
								</h4>
							</div>
							<div className="CityData-flight-travel-info-parent">
								<i class="fas fa-plane-arrival fa-lg" />{' '}
								<h4 className="flight-travel-info">
									<strong>
										{flight.arrivingairportname}
										<div className="CityData-back-text-line-flight-travel-info">
											{flight.flightdurationarriving}

											<div className="CityData-back-text-line" />
										</div>
										{flight.departingairportname}
									</strong>
								</h4>
							</div>
							<h4>
								<strong>Website:</strong> {flight.websiteurl}
							</h4>
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
								<i class="fas fa-calendar" />
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
				</div>
			</div>
		));

		var cityName = [];
		if (this.props.citys.payload && this.props.citys.payload.length > 0) {
			console.log(this.props.citys.payload);
			cityName = this.props.citys.payload[0].departingcity;
		}

		const red = this.props.citys.payload;
		console.log(red);
		return (
			<div className="CityData-body">
				<div className="nav-container">
					<Navigation />
				</div>

				<div className="Title-Container">
					<div className="Title">
						<h1>
							Leaving <strong>{cityName}</strong> <br /> &ensp; &ensp; &ensp; &ensp; &ensp;and going to...
						</h1>
					</div>
				</div>
				<div className="Container">
					{red === undefined && (
						<div>
							<h1>loading....</h1>
						</div>
					)}

					{red !== undefined && <div className="CardContainer">{flights}</div>}
				</div>

				<div className="CityData-footer">
					<h1>footer</h1>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	citys: state.citys.cities
});

const mapDispatchToProps = (dispatch) => {
	return {
		GetSpecificCity: (cityName) => {
			dispatch(specificCity(cityName));
		},
		ClearCity: () => {
			dispatch(clearCity());
		}
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityPage));
