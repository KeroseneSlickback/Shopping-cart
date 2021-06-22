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

	function addToCartHandler(item, quantity) {
		setUserCart(prev => {
			const prevCopy = [...prev];
			const foundDup = prevCopy.findIndex(copyItem => copyItem.id === item.id);
			if (foundDup >= 0) {
				const newQuantity = prev[foundDup].quantity + quantity;
				prevCopy.splice(foundDup, 1, { ...item, quantity: newQuantity });
				return prevCopy;
			} else {
				return prev.concat({ ...item, quantity: quantity });
			}
		});
	}

	function changeQuantityHandler(itemId, quantity) {
		setUserCart(prev => {
			const prevCopy = [...prev];
			const foundItem = prevCopy.findIndex(
				foundItem => foundItem.id === itemId
			);
			prevCopy.splice(foundItem, 1, {
				...prev[foundItem],
				quantity: quantity,
			});
			return prevCopy;
		});
	}

	useEffect(() => {
		const updateQuantity = userCart.reduce((a, b) => a + b.quantity, 0);
		setQuantity(updateQuantity);
		const updateTotal = userCart.reduce((a, b) => a + b.quantity * b.price, 0);
		setRunningTotal(parseFloat(updateTotal).toFixed(2));
	}, [userCart]);

	function removeFromCartHandler(itemId) {
		setUserCart(prev => {
			return prev.filter(item => item.id !== itemId);
		});
	}

	// function itemInCartHandler(itemId) {
	// 	return userCart.some(item => item === itemId);
	// }

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
