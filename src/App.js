import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
	return (
		<div>
			{/* MainLayout as the overall header/body/footer setup */}
			<MainLayout>
				{/* Switch/Route for page change, 'exaxt' here to enforce only '/' */}
				<Switch>
					<Route path="/home" exact>
						<Home />
					</Route>
					<Route path="/shopping-cart">
						<ShoppingCart />
					</Route>
				</Switch>
			</MainLayout>
		</div>
	);
}

export default App;

/*

  A shopping cart app that has a Home page and a Shopping cart section
  Display the products on the home page, a navbar at the top, and a shopping cart section
  The app will keep track of what the user chooses, keep count of the items in the shopping cart icon, and show the items at the end in the shopping cart

  Nav-bar: Home and Shopping Cart section with running total of items

  Home page: A grid layout of items from API. Each item has small details of the products with pictures. Make a pop-up once an item is clicked on. 

  Item listing: The pop-up shows more details of the product, with quantity and a "Add to cart" button. 

  Shopping cart: Displays a list of the products, prices, quantity, and total at the bottom with "Checkout" button. Delete, update quantity buttons on each item.

  Index.js:

  Create context for Shopping Cart

  App.js: 

  Navbar - contains context #
  Router
    Home page
      => Item list generated from .map and fetch
        - Title, pic, price
      => Detailed view pop up
        - Title, pic, desc, price, quantity and add to cart (state)
    Shopping Cart
      - List of items, pic, title, quantity
      - Total and "Checkout" button
  Router

  Extras: useFetch hook, context

*/
