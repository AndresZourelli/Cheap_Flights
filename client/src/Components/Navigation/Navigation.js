import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props) => {
	return (
		<nav className="nav-style">
			<ul>
				<li>
					<Link to="/">
						<strong>Home</strong>
					</Link>
				</li>
				<li>
					<Link to="" onClick={props.onScroll}>
						<strong>About</strong>
					</Link>
				</li>
				<li>
					<Link to="/">
						<strong>Contact</strong>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default withRouter(Navigation);
