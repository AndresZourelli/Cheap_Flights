import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props) => {
	return (
		<nav className="nav-style">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="" onClick={props.onScroll}>
						About
					</Link>
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default withRouter(Navigation);
