import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props) => {
	return (
		<nav className="nav-style">
			<ul>
				<li>
					<NavLink to="/" activeClassName="nav-active">
						<strong>Home</strong>
					</NavLink>
				</li>
				<li>
					<NavLink to="" onClick={props.onScroll} activeClassName="nav-active">
						<strong>About</strong>
					</NavLink>
				</li>
				<li>
					<NavLink to="/Contact" activeClassName="nav-active">
						<strong>Contact</strong>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default withRouter(Navigation);
