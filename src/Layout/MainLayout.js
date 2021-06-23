import React from 'react';
import MainNavBar from './MainNavBar';

function MainLayout(props) {
	return (
		<div>
			{/* Simple, but enforces header and body content */}
			<MainNavBar />
			<main>{props.children}</main>
		</div>
	);
}

export default MainLayout;
