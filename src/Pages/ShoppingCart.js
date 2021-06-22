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
			<div>
				<h1>Shopping list</h1>
			</div>
			<div className={classes.sectionDiv}>
				<div>
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
				</div>
				<div className={classes.totalDiv}>
					<h2>Subtotal: ${cartContext.total}</h2>
					<button className={classes.checkout}>Checkout</button>
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
