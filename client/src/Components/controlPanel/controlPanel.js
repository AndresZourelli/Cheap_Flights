import React, { Component } from 'react';
import InputForm from '../inputForm/inputForm';
import './controlPanel.css';
import { connect } from 'react-redux';
import { newFlight } from '../../actions/cityAction';

class ControlPanel extends Component {
	state = {
		newFlightForm: {
			Departingtitle: {
				TitleText: 'Departing Flight Information',
				elementType: 'solid',
				valid: true
			},
			departingcity: {
				TitleText: 'Where is this Flight Taking off From?',
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'select_city', displayValue: 'Select Departing City' },
						{ value: 'Los Angeles', displayValue: 'Los Angeles' },
						{ value: 'New York', displayValue: 'New York' },
						{ value: 'San Francisco', displayValue: 'San Francisco' },
						{ value: 'Boston', displayValue: 'Boston' }
					]
				},
				validation: {
					required: true
				},
				value: '',
				valid: true,
				touched: false
			},
			departingairportname: {
				TitleText: 'What is the Departing Airport Name Code?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Airport Name Code'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			destination: {
				TitleText: "What is the trip's destination?",
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'City Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			arrivingairportname: {
				TitleText: 'What is the destination airport name code?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Airport Name Code'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			departingdatetakeoff: {
				TitleText: 'What time does it take off at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			departingdatelanding: {
				TitleText: 'What time does it land at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			departingflightstops: {
				TitleText: 'How many stops does this flight make?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Number of stops'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			Returningtitle: {
				TitleText: 'Returning Flight Information',
				elementType: 'solid',
				valid: true
			},
			arrivingdatetakeoff: {
				TitleText: 'What time does it take off at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			arrivingdatelanding: {
				TitleText: 'What time does it Land at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},

			arrivingflightstops: {
				TitleText: 'How many stops does this flight make?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Number of stops'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			general: {
				TitleText: 'General Information',
				elementType: 'solid',
				valid: true
			},
			flightcost: {
				TitleText: 'How much does it all cost?',
				elementType: 'input',
				elementConfig: {
					type: 'number',
					placeholder: 'Enter Flight Cost'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},

			websiteurl: {
				TitleText: 'Where can the deal be found?',
				elementType: 'input',
				elementConfig: {
					type: 'url',
					placeholder: 'Enter Website URL'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		},
		added: new Date(),
		formIsValid: false,
		loading: false
	};

	uploadHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let formElementIdentifier in this.state.newFlightForm) {
			formData[formElementIdentifier] = this.state.newFlightForm[formElementIdentifier].value;
		}

		const packaged = {
			flightData: formData
		};

		this.props.newFlight(packaged);

		//Resets State after upload complete
		for (let formElementIdentifier in this.state.newFlightForm) {
			this.setState({ [formElementIdentifier]: '' });
		}
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedNewFlightsForm = {
			...this.state.newFlightForm
		};
		const updatedFormElement = {
			...updatedNewFlightsForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedNewFlightsForm[inputIdentifier] = updatedFormElement;
		let formIsValid = true;
		for (let inputIdentifier in updatedNewFlightsForm) {
			formIsValid = updatedNewFlightsForm[inputIdentifier].valid && formIsValid;
		}

		this.setState({ newFlightForm: updatedNewFlightsForm, formIsValid: formIsValid });
	};

	checkValidity(value, rules) {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (value !== 'Select Departing City') {
			isValid = value !== 'select_city' && isValid;
		}
		return isValid;
	}
	render() {
		const formElementsArray = [];
		for (let key in this.state.newFlightForm) {
			formElementsArray.push({
				id: key,
				config: this.state.newFlightForm[key]
			});
		}

		let form = (
			<form onSubmit={this.uploadHandler}>
				{formElementsArray.map((formElement) => (
					<InputForm
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						touched={formElement.config.touched}
						shouldValidate={formElement.config.validation}
						TitleText={formElement.config.TitleText}
						changed={(event) => this.inputChangedHandler(event, formElement.id)}
					/>
				))}
				<button disabled={!this.state.formIsValid}>SUBMIT</button>
			</form>
		);
		return (
			<div className="ControlPanel">
				<h1>Enter New Flight Information</h1>
				{form}
			</div>
		);
	}
}

export default connect(null, { newFlight })(ControlPanel);
