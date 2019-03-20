import React, { Component } from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';
import InfoCard from '../Info_Card/Info_Card.js';
class Home extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	scrollToMyRef = () =>
		window.scrollTo({
			top: this.myRef.current.offsetTop,
			behavior: 'smooth'
		});

	onPageLoad = () => {
		console.log('hi');
	};
	render() {
		const infer = (this.props.citys.payload || []).map((data, k) => (
			<div key={k} className="holder">
				<InfoCard CityData={data} key={data} {...this.props} />
			</div>
		));
		return (
			<div className="full-height">
				<div className="Title-container">
					<Navigation onScroll={this.scrollToMyRef} />
					<div className="Home-title-image" />
				</div>
				<div className="card_holder card-holder-style">{infer}</div>
				<div ref={this.myRef} id="about" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	citys: state.citys.availableCities
});
export default connect(mapStateToProps)(withRouter(Home));
