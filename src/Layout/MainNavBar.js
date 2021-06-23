import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavBar.module.css';
import cart from '../imgs/cart.png';

import CartContext from '../Store/CartContext';

function MainNavBar() {
	// context brought in to display current total of number of items in cart
	const cartContext = useContext(CartContext);

	return (
		<header className={classes.header}>
			<div>
				<h1 className={classes.icon}>Shopping Cart App</h1>
			</div>
			<div className={classes.navi}>
				<div className={classes.home}>
					<Link to="/" className={classes.link}>
						<p>Home</p>
					</Link>
				</div>
				<div className={classes.cart}>
					<Link to="/show-shopping-cart" className={classes.link}>
						<img src={cart} alt="Shopping Cart" />
						<p>Shopping Cart</p>
						<span className={classes.span}>{cartContext.totalCart}</span>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default MainNavBar;
