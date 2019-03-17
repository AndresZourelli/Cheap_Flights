import { FETCH_CITIES, NEW_FLIGHT, SPECIFIC_CITY } from './types';
import axios from 'axios';

export const fetchCities = (value) => dispatch => {
		axios(`http://localhost:5000/getCities`
			)
		
		.then(cities => dispatch({
			type: FETCH_CITIES,
			payload: cities.data,
			payload2: value
		})
	).then(res=>console.log('success fetchCities',res));
}

export const newFlight = (cityData) => dispatch => {
		axios('http://localhost:5000/NewFlights',{
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(cityData)
		})
		.then(res => res.json())
		.then(city => dispatch({
			type: NEW_FLIGHT,
			payload: city
		})).then(console.log('success newFlight'))
		
}

export const specificCity = (cityName) => dispatch => {
	axios(`http://localhost:5000/fetchCity`,{
		method: 'POST',
		headers: {
			'content-type':'application/json'
		},
		data:{
			cityName: cityName
		}
	})
	.then(cities => dispatch({
		type: SPECIFIC_CITY,
		payload: cityName
	})).then(console.log('Success City Added'))
	console.log(cityName)
	dispatch({
		type: SPECIFIC_CITY,
		payload: cityName
	})
}