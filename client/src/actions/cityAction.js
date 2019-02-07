import { FETCH_CITIES, NEW_FLIGHT } from './types';
import axios from 'axios';

export const fetchCities = () => dispatch => {
		axios('http://localhost:5000/boston'
			)
		
		.then(cities => dispatch({
			type: FETCH_CITIES,
			payload: cities.data
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