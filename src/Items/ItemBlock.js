import React from 'react';

import classes from './ItemBlock.module.css';

function ItemBlock(props) {
	function clickHandler() {
		props.quickView(props.num);
	}

	return (
		<div className={classes.item}>
			<div className={classes.imageDiv}>
				<img className={classes.image} src={props.img} alt="productImage" />
			</div>
			<div className={classes.desc}>
				<p>{props.title}</p>
				<div className={classes.bottomDesc}>
					<p>${props.price}</p>
					<button onClick={clickHandler}>Quick View</button>
				</div>
			</div>
		</div>
	);
}

export default ItemBlock;
