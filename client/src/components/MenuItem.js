import React from 'react';
import '../style/MenuItem.css';
import { WhiteSpace, List, Button, Badge, Stepper} from 'antd-mobile';



const menuItem = (props) => {
	var x;
	if(props.boolIsCart){
		x = props.deleteSingle;
	}
	else{
		x = props.click;
	}
	return(
		<List.Item className = "MenuItem" 					
			thumb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKhSURBVGhD7ZhLqE1RGIA3AyGKkRgwQRiITD1KKK8BBkxQXgMGIo8xZsqM8kjGMhExQ8TEI8WEgQxJnkkh4fvWPkubc+51z7ln37tOra++2v9Z+/7r32etu9Y6u8hkMplMJpPJ1M4qPNyjrsTAUfzV4x7B4j3exEk4sce05lv4Fovn+BJ3464e05qt/RkWK/AjthqyXtAZtQwDo/EU2rAUFySuNVqrNVv7X2xDG+eFKG2s0VqtuYklaOOGEKWNNVqrNTcxFW08GKK0sUZrteYmRuJXPBOitDmL1mrNLXnQMHUe4v3ysjU+6TccFaI0cZWyxtMh6oOt6NxzeUuV5WiNm0PUB2773/FciNLkPDoiE0LUD9fxHY4JUVpY0we8GqL/4JHeodsborTYj9b25+jeHyPwMb7ClEZlLL7GRyEaIGvRJz8eojQ4gQMejSqX8Af6UHvQkZJpuL28DMzGjeVlwEPdmvIy4DGiepQwn/dENqE5IuaOO7Z92rf5rOUits0UfIM/0W8idnYIjceFqChOokfpyGV8UV4GbjeM2OY9Ef/WHGJOc4dffGCfxtZgLZOxIxajS53J5voB+DvZeHyIyiJcSSJX0B87kTsNI7Z5T8S/jQ9iTnMfC1HZp7E1LPSDweBQ+43cRdfuGbgPI/NxR3kZWIROl8jqhhHbvCeyE80RcWWaju5p99C+3ai7gud+5+gT9EHqxj7syz63+EE3WY+fGno8iP/83cScFh77WYe1MBOfovP2BlanxGAxl29zzO0+VvvIezI+gJ/R+XsN/31p1q4ei8xlTnMP6el7FvrtdVNzDgsupe4R1ZdmnWiO6pI95FzAL9jq5Vk7msNcw4Z7Qqsp0onVvWfIcbmcg9WXZ51ojjqW80wmk8nUSVH8BsRnTSuZb1C1AAAAAElFTkSuQmCC"
			extra={"$" + props.price}
			// platform = "Android"
			onClick = {x}>
			{props.name} <Badge text = {props.quantity} />
			<List.Item.Brief> 
				Yummy in my tummy

			</List.Item.Brief>

			{/* <WhiteSpace />
			<Button className = "quantityControlButton" inline onClick = {props.deleteSingle}>-</Button>
			{props.quantity}
			<Button className = "quantityControlButton" inline onClick = {props.click}>+</Button> */}
		</List.Item>
	)
};

export default menuItem;