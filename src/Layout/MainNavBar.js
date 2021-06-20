import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavBar.module.css';
import trolley from '../imgs/trolley.png';

function MainNavBar() {
	return (
		<header className={classes.header}>
			<div className={classes.icon}>Shopping Cart App</div>
			<nav>
				<ul>
					<li className={classes.home}>
						<Link to="/">Home Page</Link>
					</li>
					<li className={classes.cart}>
						<img src={trolley} alt="Shopping Cart" />
						<Link to="/shopping-cart">Shopping Cart</Link>
						<span className={classes.span}>10</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavBar;
