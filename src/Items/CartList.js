import React, { useState, useEffect, useContext } from 'react';

import classes from './CartList.module.css';

import CartContext from '../Store/CartContext';

// Adjust quantity

function CartList(props) {
	const [quantity, setQuantity] = useState(props.quantity);
	const cartContext = useContext(CartContext);

	useEffect(() => {
		cartContext.changeQuantity(props.id, quantity);
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
		<tr className={classes.row}>
			<td>
				<img src={props.image} alt={props.title} className={classes.image} />
			</td>
			<td className={classes.title}>
				<h3>{props.title}</h3>
			</td>
			<td>
				<p>Qty: {props.quantity}</p>
			</td>
			<td className={classes.adjust}>
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
			</td>
			<td>
				<button className={classes.delete} onClick={() => removeItem(props.id)}>
					Delete
				</button>
			</td>
			<td className={classes.price}>
				<p>${props.price} each</p>
			</td>
			<td className={classes.itemTotal}>
				<h4>
					Item total: ${parseFloat(props.price * props.quantity).toFixed(2)}
				</h4>
			</td>
		</tr>
	);
}

export default CartList;
