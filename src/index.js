import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { CartContextProvider } from './Store/CartContext';

// context here

ReactDOM.render(
	// Provides context for the entire app
	<CartContextProvider>
		{/* Router to bring page functionality from the top down */}
		<Router>
			<App />
		</Router>
	</CartContextProvider>,
	document.getElementById('root')
);
