import React, { useState } from 'react';
import closeSVG from '../imgs/closeSVG.svg';

import classes from './ViewModal.module.css';

function ViewModal(props) {
	const [quantity, setQuantity] = useState(1);

	function addToCart() {
		props.onConfirm(props.id, quantity);
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
		<div className={classes.modal}>
			<img src={props.image} alt={props.title} />
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
			<div className={classes.quickBottom}>
				<h2>${props.price}</h2>
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
				<button className={classes.addCart} onClick={addToCart}>
					Add to Cart
				</button>
			</div>
			<img
				className={classes.closeBtn}
				onClick={props.closeModal}
				src={closeSVG}
				alt="close"
			/>
		</div>
	);
}

export default ViewModal;
