import { createContext, useState, useEffect } from 'react';

// preemtive cart is setup here
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
	// cart, overallquantity, and total price states here
	const [userCart, setUserCart] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [runningTotal, setRunningTotal] = useState(0);

	// Makes a copy of the current cart with spread operator
	// searches for index of item to find a match given to the function
	// If index is found, and larger/equal to 0
	// The new item is spliced into the array copy
	// Then the copy array is given to the cart
	function addToCartHandler(item, quantity) {
		setUserCart(prev => {
			const prevCopy = [...prev];
			const foundItemIndex = prevCopy.findIndex(
				copyItem => copyItem.id === item.id
			);
			if (foundItemIndex >= 0) {
				const newQuantity = prev[foundItemIndex].quantity + quantity;
				prevCopy.splice(foundItemIndex, 1, { ...item, quantity: newQuantity });
				return prevCopy;
			} else {
				return prev.concat({ ...item, quantity: quantity });
			}
		});
	}

	// Copy, index find, splice with given quantity, cart copy given to state
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

	// total price and quantity is calculated through .reduce
	// useEffect here to wait until update, then calculates because state can be late by one step
	useEffect(() => {
		const updateQuantity = userCart.reduce((a, b) => a + b.quantity, 0);
		setQuantity(updateQuantity);
		const updateTotal = userCart.reduce((a, b) => a + b.quantity * b.price, 0);
		setRunningTotal(parseFloat(updateTotal).toFixed(2));
	}, [userCart]);

	// filters and returns a new array without the item matching the given id
	function removeFromCartHandler(itemId) {
		setUserCart(prev => {
			return prev.filter(item => item.id !== itemId);
		});
	}

	// current context to be given
	const context = {
		cart: userCart,
		totalCart: quantity,
		total: runningTotal,
		addToCart: addToCartHandler,
		removeFromCart: removeFromCartHandler,
		changeQuantity: changeQuantityHandler,
	};

	// provides this data within this framework in Index.js, value is the context above,
	// and the props.children are everything it's wrapped around
	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
