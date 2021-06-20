import React, { useState, useEffect } from 'react';

import ItemBlock from '../Items/ItemBlock';
import classes from './Home.module.css';

function Home() {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=9')
			.then(res => res.json())
			.then(items => setItemList(items));
	}, []);

	console.log(itemList);

	return (
		<div className={classes.home}>
			<h1>Our Amazing Selection</h1>
			<div className={classes.itemGrid}>
				{itemList.map(item => {
					return (
						<ItemBlock
							key={item.id}
							img={item.image}
							title={item.title}
							price={item.price}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
