import { FETCH_CITIES, NEW_FLIGHT } from '../actions/types';

const initialState = {
	cities: [],
	flight: {}
};

export default function(state = initialState, action){
	switch(action.type) {
		case FETCH_CITIES:
			console.log('reducing')
			return {
				...state,
				cities: action.payload
			};

		case NEW_FLIGHT:
			console.log('reducing')
			return {
				...state,
				flight: action.payload
			}	
		default:
			return state;
	}
}