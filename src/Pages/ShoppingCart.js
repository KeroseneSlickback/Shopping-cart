import React, { useContext } from 'react';

import CartList from '../Items/CartList';
import CartContext from '../Store/CartContext';

function ShoppingCart() {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<h1>Shopping list</h1>
			{cartContext.cart.map(item => {
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
			{/* CartList output */}
			<h2>Total: ${cartContext.total}</h2>
			<button>Checkout</button>
		</div>
	);
}

export default ShoppingCart;
