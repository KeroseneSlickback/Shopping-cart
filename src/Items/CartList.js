import React, { useState, useEffect, useContext } from 'react';

import classes from './CartList.module.css';

import CartContext from '../Store/CartContext';

// Adjust quantity

function CartList(props) {
	// bring in context and a new quantity for adjustments
	const [quantity, setQuantity] = useState(props.quantity);
	const cartContext = useContext(CartContext);

	// if quantity changes from input, cart in context is changed with id and quantity
	useEffect(() => {
		cartContext.changeQuantity(props.id, quantity);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantity]);

	function removeItem(id) {
		cartContext.removeFromCart(id);
	}

	function increaseQuantity() {
		setQuantity(prev => prev + 1);
	}

	function changeHandler(e) {
		setQuantity(parseInt(e.target.value));
	}

	function decreaseQuantity() {
		if (quantity === 1) {
			return;
		} else {
			setQuantity(prev => prev - 1);
		}
	}

	return (
		<div className={classes.container}>
			<div className={classes.imageDiv}>
				<img src={props.image} alt={props.title} className={classes.image} />
			</div>
			<div className={classes.infoDiv}>
				<h3 className={classes.title}>{props.title}</h3>
				<div className={classes.adjustDiv}>
					<div className={classes.quantity}>
						<input
							type="button"
							value="-"
							className={classes.addMinus}
							onClick={decreaseQuantity}
						/>
						<input
							type="number"
							step="1"
							min="1"
							max=""
							name="quantity"
							value={quantity}
							onChange={changeHandler}
							className={classes.inputQuantity}
						/>
						<input
							type="button"
							value="+"
							className={classes.addMinus}
							onClick={increaseQuantity}
						/>
					</div>
					<button
						className={classes.delete}
						onClick={() => removeItem(props.id)}
					>
						Delete
					</button>
					<div className={classes.priceDiv}>
						<p>${props.price} each</p>
					</div>
				</div>
			</div>
			<div className={classes.totalDiv}>
				<h4>
					Item total: ${parseFloat(props.price * props.quantity).toFixed(2)}
				</h4>
			</div>
		</div>
	);
}

export default CartList;
