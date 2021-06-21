import React, { useState, useEffect, useContext } from 'react';

import ItemBlock from '../Items/ItemBlock';
import ViewModal from '../Items/ViewModal';
import Backdrop from '../Items/Backdrop';
import classes from './Home.module.css';

import CartContext from '../Store/CartContext';

function Home() {
	const cartContext = useContext(CartContext);

	const [itemList, setItemList] = useState([]);
	const [viewModal, setViewModal] = useState(false);
	const [selectItem, setSelectItem] = useState();

	function openModal(num) {
		const selectedItem = itemList.find(obj => {
			return obj.id === num;
		});
		setViewModal(true);
		setSelectItem(selectedItem);
	}

	function closeModal() {
		setViewModal(false);
	}

	function confirmHandler(itemId, quant) {
		const addedItem = itemList.find(item => {
			return item.id === itemId;
		});
		cartContext.addToCart({
			...addedItem,
			quantity: quant,
		});
		setViewModal(false);
	}

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=9')
			.then(res => res.json())
			.then(items => setItemList(items));
	}, []);

	return (
		<div className={classes.home}>
			<h1>Our Amazing Selection</h1>
			<div className={classes.itemGrid}>
				{itemList.map(item => {
					return (
						<ItemBlock
							key={item.id}
							num={item.id}
							img={item.image}
							title={item.title}
							price={item.price}
							quickView={openModal}
						/>
					);
				})}
			</div>
			{viewModal ? (
				<ViewModal
					id={selectItem.id}
					image={selectItem.image}
					title={selectItem.title}
					desc={selectItem.description}
					price={selectItem.price}
					closeModal={closeModal}
					onConfirm={confirmHandler}
				/>
			) : null}
			{viewModal ? <Backdrop closeModal={closeModal} /> : null}
		</div>
	);
}

export default Home;
