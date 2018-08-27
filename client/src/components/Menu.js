import React, { Component } from 'react';
import MenuItem from './MenuItem'
import { connect } from 'react-redux';
import { getMenu } from '../actions/menuItemActions';
import PropTypes from 'prop-types';
class Menu extends Component {

  componentDidMount() {
    this.props.getMenu();


  }
  state = {
    menuItems: [],
    cart:[],
    showMenu: true,
  }
  
  
  showItemHandler = (event) =>{
    const temp = !this.state.showMenu;
    this.setState(
        {
          showMenu: temp
        }
      )
  }
  menuClickHandler = (menuIndex) =>{
    const newStateMenu = [...this.props.menuItem.menuItems];
    const num = this.props.menuItem.menuItems[menuIndex].quantity+1;
    newStateMenu[menuIndex].quantity = num;
    const newStateCart = [...this.state.cart];
    const cat = this.props.menuItem.menuItems[menuIndex].category;
    const nm = this.props.menuItem.menuItems[menuIndex].name;
    const prc = this.props.menuItem.menuItems[menuIndex].price;
    let count = this.props.menuItem.menuItems[menuIndex].quantity;
    if(count == 1){
      newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
    }
    else{
      for(let i = 0; i < newStateCart.length; i++){
        if(newStateCart[i].name == newStateMenu[menuIndex].name){
          newStateCart[i].quantity++;
        }
      }
    }
    this.setState(
      {
        menuItems: newStateMenu,
        cart: newStateCart
      }
    )
  }
  clearCart = (event) =>{
    const newState = [];
    const newMenu = [...this.props.menuItem.menuItems];
    for(let i = 0; i<newMenu.length; i++){
      newMenu[i].quantity = 0;
    }
    this.setState(
      {
        cart: newState,
        menuItems: newMenu
      }
    )
  }
  deleteOne = (menuIndex) =>{
    const newCart = [...this.state.cart];
    newCart.splice(menuIndex,1);
    this.setState(
      {
        cart: newCart
      }
    )
  }
  render() {
    const style = {
      backgroundColor: 'teal',
      font: 'inherit',
      border: '1px black',
      padding: '8px',
      cursor: 'pointer'
    }
    // const style ={
    //   backgroundColor: 'aqua',
    //   font: 'inherit',
    //   border: '1px black',
    //   padding: '5px',
    //   curson: 'pointer'
    // }
    let menuItems = null;
    let subtotal = 0;
    let title = "";
    let otherTitle = "";

    for(let i = 0; i < this.state.cart.length;i++){
      subtotal+=this.state.cart[i].price;
    }
    if(this.state.showMenu){
      title = "Menu";
      otherTitle = "Cart";
      menuItems = (
        <div>
          {this.props.menuItem.menuItems.map((menuItems,index) =>{
              return(<MenuItem click = {() => this.menuClickHandler(index)} name = {menuItems.name} price = {menuItems.price} quantity = {menuItems.quantity}/>)
          })}
        </div> 
      );
    }
    else{
      title = "Cart"
      otherTitle = "Menu";
      menuItems = (
        <div>
          {this.state.cart.map((cart,index) =>{
              return(<MenuItem click = {() => this.deleteOne(index)} name = {cart.name} price = {cart.price} quantity = {cart.quantity}/>);
          })}
        </div> 
      );
    }
    return (
        <div className="App">
          <h1>{title}</h1>
          <p>Subtotal: ${subtotal}</p>
          <button 
            style={style}
            onClick={this.showItemHandler.bind(this, "Menu")}>See {otherTitle}</button>
          <button 
            style={style}
            onClick={this.clearCart.bind(this, "Menu")}>Clear Cart</button>
          <ul>{menuItems}</ul>
        </div>

    );

    // return (React.createElement('div',{className: 'App'},React.createElement('h1',null,"yo whats good")));
  }
}

Menu.propTypes = {
  getMenu : PropTypes.func.isRequired,
  menuItem : PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  menuItem: state.menuItem

})


export default connect(mapStateToProps, { getMenu })(Menu);
