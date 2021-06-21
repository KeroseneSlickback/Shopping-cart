import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
	cart: [],
	totalCart: 0,
	total: 0,
	addToCart: item => {},
	removeFromCart: itemId => {},
	itemInCart: itemId => {},
	changeQuantity: itemAmount => {},
});

export const CartContextProvider = props => {
	const [userCart, setUserCart] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [runningTotal, setRunningTotal] = useState(0);

	function addToCartHandler(item) {
		setUserCart(prev => {
			const prevCopy = [...prev];
			const foundDup = prevCopy.find(foundItem => {
				return foundItem.id === item.id;
			});
			if (foundDup) {
				foundDup.quantity = foundDup.quantity + item.quantity;
				return prevCopy;
			} else {
				return prev.concat(item);
			}
		});
	}

	useEffect(() => {
		const updateQuantity = userCart.reduce((a, b) => a + b.quantity, 0);
		setQuantity(updateQuantity);
		const updateTotal = userCart.reduce((a, b) => a + b.quantity * b.price, 0);
		setRunningTotal(updateTotal);
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
		total: runningTotal,
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
