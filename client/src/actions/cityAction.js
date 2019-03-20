import { FETCH_CITIES, NEW_FLIGHT, SPECIFIC_CITY, CLEAR_CITY } from './types';
import axios from 'axios';

export const fetchCities = (value) => dispatch => {
		axios(`http://localhost:5000/getCities`
			)
		
		.then(cities => dispatch({
			type: FETCH_CITIES,
			payload: cities.data,
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
	.then(cities =>{
	if(cities.data.payload.length > 0){
		dispatch({
			type: SPECIFIC_CITY,
			payload: cities.data
		})
	}else{
		dispatch({
			type: SPECIFIC_CITY,
			payload: []
		})
	}

	
	}).then(console.log('Success City Added'))
}

export const clearCity = () => dispatch => {
	dispatch({
		type: CLEAR_CITY,
		payload: []
	})
	
}