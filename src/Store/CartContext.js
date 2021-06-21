import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
	cart: [],
	totalCart: 0,
	addToCart: item => {},
	removeFromCart: itemId => {},
	itemInCart: itemId => {},
	changeQuantity: itemAmount => {},
});

export const CartContextProvider = props => {
	const [userCart, setUserCart] = useState([]);
	const [quantity, setQuantity] = useState(0);

	function addToCartHandler(item) {
		setUserCart(prev => {
			return prev.concat(item);
		});
	}

	useEffect(() => {
		const updateQuantity = userCart.reduce((a, b) => a + b.quantity, 0);
		setQuantity(updateQuantity);
	}, [userCart]);

	function removeFromCartHandler(itemId) {
		setUserCart(prev => {
			return prev.filter(item => item.id !== itemId);
		});
	}

	// function itemInCartHandler(itemId) {
	// 	return userCart.some(item => item === itemId);
	// }

	function changeQuantityHandler(itemId) {
		// search through cart, adjust quantity... some?
	}

	const context = {
		cart: userCart,
		totalCart: quantity,
		addToCart: addToCartHandler,
		removeFromCart: removeFromCartHandler,
		changeQuantity: changeQuantityHandler,
	};

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
