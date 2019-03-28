import { FETCH_CITIES, SPECIFIC_CITY, CLEAR_CITY, NEW_FLIGHT } from './types';
import axios from 'axios';
export const fetchCities = (value) => (dispatch) => {
	axios(`https://aqueous-citadel-23339.herokuapp.com/getCities`).then((cities) => {
		dispatch({
			type: FETCH_CITIES,
			payload: cities.data.payload
		});
	});
};

export const newFlight = (cityData) => (dispatch) => {
	axios('https://aqueous-citadel-23339.herokuapp.com/NewFlights', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		data: JSON.stringify(cityData)
	})
		.then(
			dispatch({
				type: NEW_FLIGHT,
				payload: true
			})
		)
		.catch((err) => console.log(err));
};

export const specificCity = (cityName) => (dispatch) => {
	axios(`https://aqueous-citadel-23339.herokuapp.com/fetchCity`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		data: {
			cityName: cityName
		}
	}).then((cities) => {
		if (cities.data.payload.length > 0) {
			dispatch({
				type: SPECIFIC_CITY,
				payload: cities.data
			});
		} else {
			dispatch({
				type: SPECIFIC_CITY,
				payload: []
			});
		}
	});
};

export const clearCity = () => (dispatch) => {
	dispatch({
		type: CLEAR_CITY,
		payload: []
	});
};
