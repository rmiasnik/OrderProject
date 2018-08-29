import React from 'react';
import '../style/MenuItem.css';
import { WhiteSpace, Card, List, Stepper } from 'antd-mobile';



const menuItem = (props) => {
	//handles the case of cart(EXTRA X BUTTON)
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
	//handles the case of the actual menu
	else{
		if(props.quantity === 0 || props.quantity === null){
			return(
				/* <h2>{props.name}</h2>
				<p>Cost: ${props.price}</p>
				<p>{props.children}</p>
				<button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button> */
				<Card className = "MenuItem">
					<Card.Header
						title={props.name}
						thumb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKhSURBVGhD7ZhLqE1RGIA3AyGKkRgwQRiITD1KKK8BBkxQXgMGIo8xZsqM8kjGMhExQ8TEI8WEgQxJnkkh4fvWPkubc+51z7ln37tOra++2v9Z+/7r32etu9Y6u8hkMplMJpPJ1M4qPNyjrsTAUfzV4x7B4j3exEk4sce05lv4Fovn+BJ3464e05qt/RkWK/AjthqyXtAZtQwDo/EU2rAUFySuNVqrNVv7X2xDG+eFKG2s0VqtuYklaOOGEKWNNVqrNTcxFW08GKK0sUZrteYmRuJXPBOitDmL1mrNLXnQMHUe4v3ysjU+6TccFaI0cZWyxtMh6oOt6NxzeUuV5WiNm0PUB2773/FciNLkPDoiE0LUD9fxHY4JUVpY0we8GqL/4JHeodsborTYj9b25+jeHyPwMb7ClEZlLL7GRyEaIGvRJz8eojQ4gQMejSqX8Af6UHvQkZJpuL28DMzGjeVlwEPdmvIy4DGiepQwn/dENqE5IuaOO7Z92rf5rOUits0UfIM/0W8idnYIjceFqChOokfpyGV8UV4GbjeM2OY9Ef/WHGJOc4dffGCfxtZgLZOxIxajS53J5voB+DvZeHyIyiJcSSJX0B87kTsNI7Z5T8S/jQ9iTnMfC1HZp7E1LPSDweBQ+43cRdfuGbgPI/NxR3kZWIROl8jqhhHbvCeyE80RcWWaju5p99C+3ai7gud+5+gT9EHqxj7syz63+EE3WY+fGno8iP/83cScFh77WYe1MBOfovP2BlanxGAxl29zzO0+VvvIezI+gJ/R+XsN/31p1q4ei8xlTnMP6el7FvrtdVNzDgsupe4R1ZdmnWiO6pI95FzAL9jq5Vk7msNcw4Z7Qqsp0onVvWfIcbmcg9WXZ51ojjqW80wmk8nUSVH8BsRnTSuZb1C1AAAAAElFTkSuQmCC"
						extra={"$" + props.price}
					/>
				{/* <h2>{props.name}</h2>
				<p>Cost: ${props.price}</p> */}
				{/* @JIVAN --- implement Stepper from here: https://mobile.ant.design/components/stepper/ */}
				<WhiteSpace />
				<Stepper
					style={{ width: '100%', minWidth: '100px' }}
					showNumber
					max={30}
					min={0}
					value={props.quantity}
					onChange={props.deleteSingle}
				/>

				{/* <p>{props.children}</p> */}
				{/* <button onClick = {props.deleteSingle}>-</button><button onClick = {props.click}>+</button> */}
			</Card>
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