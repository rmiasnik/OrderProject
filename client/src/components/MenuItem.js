import React from 'react';
import '../style/MenuItem.css';
const menuItem = (props) => {
	if(props.quantity == 0||props.quantity == null){
		return(
			<div className = "MenuItem">
				<p onClick={props.click}>Item: {props.name} || Cost: ${props.price}</p>
				<p>{props.children}</p>
			</div>
		)
	}
	return(
	<div className = "MenuItem">
		<p onClick={props.click}>Item: {props.name} || Cost: ${props.price} || Number in Cart: {props.quantity}</p>
		<p>{props.children}</p>
	</div>
	)
};

export default menuItem;