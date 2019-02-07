import React, { Component } from 'react';
import axios from 'axios';
import InputForm from "../inputForm/inputForm";
import "./controlPanel.css";
import { connect } from 'react-redux';
import { newFlight } from '../../actions/cityAction';

class ControlPanel extends Component {
	state = {
		newFlightForm: {
			departingCity :{
				elementType: 'select',
				elementConfig: {
					options:[
					{value: 'select_city', displayValue: 'Select Departing City'},
					{value: 'los_angeles', displayValue: 'Los Angeles'},
					{value: 'new_york', displayValue: 'New York'},
					{value: 'san_francisco', displayValue: 'San Francisco'},
					{value: 'boston', displayValue: 'Boston'}
					]
				},
				value: ''
			},
			arrivingDate: {
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Arriving Date and Time'
				},
				value: ''
			},
			arrivingCity: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Arriving City Name'
				},
				value: ''
			},
			departingDate:{
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Departing Date and Time'
				},
				value: ''
			},
			flightDurationDeparting: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Departing Flight Duration'
				},
				value: ''
			},
			flightDurationArriving: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Arriving Flight Duration'
				},
				value: ''
			},
			flightCost: {
				elementType: 'input',
				elementConfig: {
					type: 'number',
					placeholder: 'Enter Flight Cost'
				},
				value: ''
			},
			uploadDate: {
				elementType: 'input',
				elementConfig: {
					type: 'date',
					placeholder: 'Enter Upload Date'
				},
				value: ''
			},
			websiteURL: {
				elementType: 'input',
				elementConfig: {
					type: 'url',
					placeholder: 'Enter Website URL'
				},
				value: ''
			}
		
		},
		loading: false

	}

	uploadHandler = (event) => {
		event.preventDefault();
		this.setState({loading:true});
		const formData = {};
		for(let formElementIdentifier in this.state.newFlightForm){
			formData[formElementIdentifier] = this.state.newFlightForm[formElementIdentifier].value;
		}

		const packaged = {
			flightData: formData
		}

		this.props.newFlight(packaged);

		//Resets State after upload complete
		for(let formElementIdentifier in this.state.newFlightForm){
			this.setState({ [formElementIdentifier] : ''}) 
		}

	}
	
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedNewFlightsForm = {
			...this.state.newFlightForm
		};
		const updatedFormElement = {
			...updatedNewFlightsForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedNewFlightsForm[inputIdentifier] = updatedFormElement;
		this.setState({newFlightForm: updatedNewFlightsForm})
	}
	render() {
		const formElementsArray = [];
		for (let key in this.state.newFlightForm) {
			formElementsArray.push({
				id:key,
				config: this.state.newFlightForm[key]
			});
		}

		let form = (
			<form onSubmit={this.uploadHandler}>
				{formElementsArray.map(formElement => (
					<InputForm 
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					changed={(event) => this.inputChangedHandler(event, formElement.id)}
					/>
					))}
				<button>SUBMIT</button>
			</form>
			);
		
		return (
		
				<div className="ControlPanel">
					<h3>Enter Flight Information</h3>
					{form}
				</div>

		);
	}
}


export default connect(null, { newFlight })(ControlPanel);