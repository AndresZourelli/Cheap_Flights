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
				elementType: 'solid'
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
				value: ''
			},
			departingairportname: {
				TitleText: 'What is the Departing Airport Name Code?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Airport Name Code'
				},
				value: ''
			},
			destination: {
				TitleText: "What is the trip's destination?",
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'City Name'
				},
				value: ''
			},
			arrivingairportname: {
				TitleText: 'What is the destination airport name code?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Airport Name Code'
				},
				value: ''
			},
			departingdatetakeoff: {
				TitleText: 'What time does it take off at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: ''
			},
			departingdatelanding: {
				TitleText: 'What time does it land at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: ''
			},
			departingflightstops: {
				TitleText: 'How many stops does this flight make?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Number of stops'
				},
				value: ''
			},
			Returningtitle: {
				TitleText: 'Returning Flight Information',
				elementType: 'solid'
			},
			arrivingdatetakeoff: {
				TitleText: 'What time does it take off at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: ''
			},
			arrivingdatelanding: {
				TitleText: 'What time does it Land at?',
				elementType: 'input',
				elementConfig: {
					type: 'datetime-local',
					placeholder: 'Enter Date and Time'
				},
				value: ''
			},

			arrivingflightstops: {
				TitleText: 'How many stops does this flight make?',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Number of stops'
				},
				value: ''
			},
			general: {
				TitleText: 'General Information',
				elementType: 'solid'
			},
			flightcost: {
				TitleText: 'How much does it all cost?',
				elementType: 'input',
				elementConfig: {
					type: 'number',
					placeholder: 'Enter Flight Cost'
				},
				value: ''
			},

			websiteurl: {
				TitleText: 'Where can the deal be found?',
				elementType: 'input',
				elementConfig: {
					type: 'url',
					placeholder: 'Enter Website URL'
				},
				value: ''
			}
		},
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
		updatedNewFlightsForm[inputIdentifier] = updatedFormElement;
		this.setState({ newFlightForm: updatedNewFlightsForm });
	};
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
						TitleText={formElement.config.TitleText}
						changed={(event) => this.inputChangedHandler(event, formElement.id)}
					/>
				))}
				<button>SUBMIT</button>
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
