import React, { useState, useEffect, useContext } from 'react';

import CartList from '../Items/CartList';
import CartContext from '../Store/CartContext';
import classes from './ShoppingCart.module.css';

function ShoppingCart() {
	const [cart, setCart] = useState([]);
	const cartContext = useContext(CartContext);

	useEffect(() => {
		setCart(cartContext.cart);
	}, [cartContext]);

	return (
		<div className={classes.cartDiv}>
			<h1>Shopping list</h1>
			<table className={classes.table}>
				<tbody>
					{cart.map(item => {
						return (
							<CartList
								key={item.id}
								image={item.image}
								title={item.title}
								quantity={item.quantity}
								price={item.price}
								id={item.id}
							/>
						);
					})}
				</tbody>
			</table>
			<div className={classes.totalDiv}>
				<h2>Total: ${cartContext.total}</h2>
				<button className={classes.checkout}>Checkout</button>
			</div>
		</div>
	);
}

export default ShoppingCart;
