import React from 'react';

function Backdrop(props) {
	return <div className="backdrop" onClick={props.closeModal} />;
}

export default Backdrop;
