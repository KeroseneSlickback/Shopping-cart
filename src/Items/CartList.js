import React from 'react';

import classes from './CartList.module.css';

function CartList(props) {
	return (
		<div className={classes.listDiv}>
			<img src={props.image} alt={props.title} style={{ height: '75px' }} />
			<h3>{props.title}</h3>
			<p>Qty: {props.quantity}</p>
			<div className={classes.quantity}>
				<input type="button" value="-" className={classes.addMinus} />
				<input
					type="number"
					step="1"
					min="1"
					max=""
					name="quantity"
					className={classes.inputQuantity}
				/>
				<input type="button" value="+" className={classes.addMinus} />
			</div>
			<p>${props.price}</p>
			<p>Item total: ${props.price * props.quantity}</p>
		</div>
	);
}

export default CartList;
