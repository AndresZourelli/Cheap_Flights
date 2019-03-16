import { FETCH_CITIES, NEW_FLIGHT, SPECIFIC_CITY } from '../actions/types';

const initialState = {
	cities: [],
	flight: {},
	query:""
};

export default function(state = initialState, action){
	switch(action.type) {
		case FETCH_CITIES:
			console.log('Fetch reducing')
			return {
				...state,
				cities: action.payload,
			};

		case NEW_FLIGHT:
			console.log('New reducing')
			return {
				...state,
				flight: action.payload
			}
		case SPECIFIC_CITY:
			console.log('Specific reducing')
			return {
				...state,
				query: action.payload
			}	
		default:
			return state;
	}
}