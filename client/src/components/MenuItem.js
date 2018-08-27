import React from 'react';
import '../style/MenuItem.css';
const menuItem = (props) => {
	if(props.boolIsCart){
		if(props.quantity === 0 || props.quantity === null){
			return(
				<div className = "MenuItem">
					<h2>{props.name}</h2>
					<p>Cost: ${props.price}</p>
					<p>{props.children}</p>
					<button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button>
					<button onClick = {props.deleteAll}>X</button>
				</div>
			)
		}
		return(
		<div className = "MenuItem">
			<h2>{props.name}</h2>
			<p>Cost: ${props.price} Number in Cart: {props.quantity}</p>
			<p>{props.children}</p>
			<button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button>
			<button onClick = {props.deleteAll}>X</button>
		</div>
		)
	}
	else{
		if(props.quantity === 0 || props.quantity === null){
			return(
				<div className = "MenuItem">
					<h2>{props.name}</h2>
					<p>Cost: ${props.price}</p>
					<p>{props.children}</p>
					<button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button>
				</div>
			)
		}
		return(
		<div className = "MenuItem">
			<h2>{props.name}</h2>
			<p>Cost: ${props.price} Number in Cart: {props.quantity}</p>
			<p>{props.children}</p>
			<button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button>
		</div>
		)
	}
};

export default menuItem;