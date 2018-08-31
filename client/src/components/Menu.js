import React, { Component } from 'react';
import MenuItem from './MenuItem'
import '../style/Menu.css';
import { connect } from 'react-redux';
import { getMenu } from '../actions/menuItemActions';
import PropTypes from 'prop-types';
import { Button, WhiteSpace, WingBlank, NavBar, Accordion, List } from 'antd-mobile';

class Menu extends Component {
  componentDidMount() {
    this.props.getMenu();
  }
  state = {
    menuItems: [],
    cart:[],
    appetizer:[],
    entree:[],
    dessert:[],
    showMenu: 0,
  }
  
  
  showItemHandler = (event) =>{
    var temp;
    if(this.state.showMenu === 0){
      temp = 1;
    }
    else if(this.state.showMenu === 1){
      temp = 0;
    }
    else if(this.state.showMenu === 2){
      temp = 1;
    }
    this.setState(
        {
          showMenu: temp
        }
      )
  }
  addFromCart = (menuIndex) =>{
    const newStateApp = [...this.state.appetizer];
    const newStateEnt = [...this.state.entree];
    const newStateDes = [...this.state.dessert];
    const newStateCart = [...this.state.cart];
    if(newStateCart[menuIndex].category === "Appetizer"){
      const num = this.state.cart[menuIndex].quantity+1;
      newStateCart[menuIndex].quantity = num;
      const cat = newStateCart[menuIndex].category;
      const nm = newStateCart[menuIndex].name;
      const prc = newStateCart[menuIndex].price;
      let count = newStateCart[menuIndex].quantity;
      if(count === 1){
        newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
      }
      for(let i = 0; i < newStateApp.length; i++){
        if(newStateApp[i].name === newStateCart[menuIndex].name){
          newStateApp[i].quantity++;
        }
      }
    }
    else if(newStateCart[menuIndex].category === "Entree"){
      const num = this.state.cart[menuIndex].quantity+1;
      newStateCart[menuIndex].quantity = num;
      const cat = newStateCart[menuIndex].category;
      const nm = newStateCart[menuIndex].name;
      const prc = newStateCart[menuIndex].price;
      let count = newStateCart[menuIndex].quantity;
      if(count === 1){
        newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
      }
      for(let i = 0; i < newStateEnt.length; i++){
        if(newStateEnt[i].name === newStateCart[menuIndex].name){
          newStateEnt[i].quantity++;
        }
      }
    }
    else if(newStateCart[menuIndex].category === "Dessert"){
      const num = this.state.cart[menuIndex].quantity+1;
      newStateCart[menuIndex].quantity = num;
      const cat = newStateCart[menuIndex].category;
      const nm = newStateCart[menuIndex].name;
      const prc = newStateCart[menuIndex].price;
      let count = newStateCart[menuIndex].quantity;
      if(count === 1){
        newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
      }
      for(let i = 0; i < newStateDes.length; i++){
        if(newStateDes[i].name === newStateCart[menuIndex].name){
          newStateDes[i].quantity++;
        }
      }
    }
    this.setState(
      {
        appetizer: newStateApp,
        entree: newStateEnt,
        dessert: newStateDes,
        cart: newStateCart,
      }
    )
  }
  appClickHandler = (menuIndex) =>{
    const newStateApp = [...this.state.appetizer];
    const num = this.state.appetizer[menuIndex].quantity+1;
    newStateApp[menuIndex].quantity = num;
    const newStateCart = [...this.state.cart];
    const cat = newStateApp[menuIndex].category;
    const nm = newStateApp[menuIndex].name;
    const prc = newStateApp[menuIndex].price;
    let count = newStateApp[menuIndex].quantity;
    if(count === 1){
      newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
    }
    else{
      for(let i = 0; i < newStateCart.length; i++){
        if(newStateCart[i].name === newStateApp[menuIndex].name){
          newStateCart[i].quantity++;
        }
      }
    }
    this.setState(
      {
        appetizer: newStateApp,
        cart: newStateCart,
      }
    )
  }
  entreeClickHandler = (menuIndex) =>{
    const newStateEntree = [...this.state.entree];
    const num = this.state.entree[menuIndex].quantity+1;
    newStateEntree[menuIndex].quantity = num;
    const newStateCart = [...this.state.cart];
    const cat = newStateEntree[menuIndex].category;
    const nm = newStateEntree[menuIndex].name;
    const prc = newStateEntree[menuIndex].price;
    let count = newStateEntree[menuIndex].quantity;
    if(count === 1){
      newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
    }
    else{
      for(let i = 0; i < newStateCart.length; i++){
        if(newStateCart[i].name === newStateEntree[menuIndex].name){
          newStateCart[i].quantity++;
        }
      }
    }
    this.setState(
      {
        entree: newStateEntree,
        cart: newStateCart,
      }
    )
  }
  dessertClickHandler = (menuIndex) =>{
    const newStateDes = [...this.state.dessert];
    const num = this.state.dessert[menuIndex].quantity+1;
    newStateDes[menuIndex].quantity = num;
    const newStateCart = [...this.state.cart];
    const cat = newStateDes[menuIndex].category;
    const nm = newStateDes[menuIndex].name;
    const prc = newStateDes[menuIndex].price;
    let count = newStateDes[menuIndex].quantity;
    if(count === 1){
      newStateCart.push({category: cat, name: nm, price: prc,quantity: count});
    }
    else{
      for(let i = 0; i < newStateCart.length; i++){
        if(newStateCart[i].name === newStateDes[menuIndex].name){
          newStateCart[i].quantity++;
        }
      }
    }
    this.setState(
      {
        dessert: newStateDes,
        cart: newStateCart,
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

  checkOutClicked = (event) => {
    const a = 2;
    this.setState(
      {
        showMenu: a,
      }
    )
  }

  deleteAllOfOne = (menuIndex) =>{
    if(this.state.cart.length === 0){
      return;
    }
    const newCart = [...this.state.cart];
    const newMenu = [...this.props.menuItem.menuItems];
    for(let i = 0; i < newMenu.length; i++){
      if(newMenu[i].name === newCart[menuIndex].name){
        newMenu[i].quantity = 0;
      }
    }
    newCart.splice(menuIndex,1);
    this.setState(
      {
        cart: newCart,
        menuItems: newMenu
      }
    )
  }
  deleteSingleCart = (menuIndex) =>{
    const newCart = [...this.state.cart];
    const newMenu = [...this.props.menuItem.menuItems];
    for(let i = 0; i < newMenu.length; i++){
      if(newMenu[i].name === newCart[menuIndex].name && newMenu[i].quantity !== 0){
        newMenu[i].quantity--;
      }
    }
    if(newCart[menuIndex].quantity === 1){//splice if 1
      newCart.splice(menuIndex,1);
    }
    else if(newCart[menuIndex].quantity === 0){//do nothing for 0

    }
    else{
      newCart[menuIndex].quantity--;
    }
    this.setState({
        cart: newCart,
        menuItems: newMenu
    })
  }
  deleteSingleApp = (menuIndex) =>{
    if(this.state.cart.length === 0){
      return;
    }
    const newCart = [...this.state.cart];
    const newApp = [...this.state.appetizer];
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].name === newApp[menuIndex].name && newApp[menuIndex].quantity !== 1){
        newCart[i].quantity--;
      }
      if(newCart[i].name === newApp[menuIndex].name && newApp[menuIndex].quantity === 1){
        newCart.splice(i,1);
      }
    }
    if(newApp[menuIndex].quantity === 0){//do nothing for 0

    }
    else{
      newApp[menuIndex].quantity--;
    }
    this.setState({
        cart: newCart,
        appetizer: newApp
    })
  }
  deleteSingleEntree = (menuIndex) =>{
    if(this.state.cart.length === 0){
      return;
    }
    const newCart = [...this.state.cart];
    const newEntree = [...this.state.entree];
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].name === newEntree[menuIndex].name && newEntree[menuIndex].quantity !== 1){
        newCart[i].quantity--;
      }
      if(newCart[i].name === newEntree[menuIndex].name && newEntree[menuIndex].quantity === 1){
        newCart.splice(i,1);
      }
    }
    if(newEntree[menuIndex].quantity === 0){//do nothing for 0
    }
    else{
      newEntree[menuIndex].quantity--;
    }
    this.setState({
        cart: newCart,
        entree: newEntree
    })
  }
  finalizeOrder = (event) =>{
    var a = "";
    for(let i = 0; i < this.state.cart.length; i++){
      a += this.state.cart[i].name + " " + this.state.cart[i].quantity + "\n";
    }
    console.log(a);
    this.setState({
      showMenu: 3,
    })
  }
  deleteSingleDessert = (menuIndex) =>{
    if(this.state.cart.length === 0){
      return;
    }
    const newCart = [...this.state.cart];
    const newDes = [...this.state.dessert];
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].name === newDes[menuIndex].name && newDes[menuIndex].quantity !== 1){
        newCart[i].quantity--;
      }
      if(newCart[i].name === newDes[menuIndex].name && newDes[menuIndex].quantity === 1){
        newCart.splice(i,1);
      }
    }
    if(newDes[menuIndex].quantity === 0){//do nothing for 0

    }
    else{
      newDes[menuIndex].quantity--;
    }
    this.setState({
        cart: newCart,
        dessert: newDes
    })
  }
  sort = () => {
    if(this.state.appetizer.length + this.state.entree.length + this.state.dessert.length === this.props.menuItem.menuItems.length){
    }
    else{
    const menu = [...this.props.menuItem.menuItems];
    const app = [];
    const ent = [];
    const des = [];
    for(let i = 0; i < menu.length; i++){
      if(menu[i].category === "Appetizer"){
        app[app.length] = (menu[i]);
      }
      if(menu[i].category === "Entree"){
        ent[ent.length] = (menu[i]);
      }
      if(menu[i].category === "Dessert"){
        des[des.length] = (menu[i]);
      }
    }
    this.setState({
      dessert: des,
      entree: ent,
      appetizer: app,
    })}
  }

  render() {
    let menuItems = null;
    let subtotal = 0;
    let title = "";
    let otherTitle = "";
    let appetizers = [];
    let entrees = [];
    let desserts = [];
    let titleIconLink = "";
    // let otherTitleIconLink = "";
    var different;
    this.sort();
    for(let i = 0; i < this.state.cart.length;i++){
      subtotal+=this.state.cart[i].price * this.state.cart[i].quantity;
    }
    if(this.state.showMenu === 0){//HANDLES THE MENU SCREEN
      //populates the arrays
      title = "Menu";
      otherTitle = "Cart";
      titleIconLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJHSURBVGhD7dpNiE1hHMfxKzWNQpnCAgsalCQvG7uhpBRZTNhYULLxkrKQpZRIMqXYSSJvk0JKsbBgxcZCCkWUbLDwkih8f4tTT6f/uPc85/k/t1PnW5/lPP/zzNxzzr3nTqetra3nZuI8nuBp4CbmoTHdwt8JPEBjegFrE4WlaER7YW2gcBaNaRm2YQsuINzIN1zvk2s4iEmo3Fz8RriZftNmohqHtWC/3EZUa2Et2C86j6PSa/I5rEVze40BRLcP1sK5jaJW0/EV1uK5PEbUFavcOVgDcviD1UiS7urWkBx0D0naQ1iDPP3EAiRtK6xhnk4hebr0fYA10MMnzIBLR2AN9XAAbs1BjvdftW9+vXQD1vCUat/8emkNrOGpJLv5dUtDXsI6iLqS3vy6tQS/YB1IXSeRJf01HsE6iDreQm/Rs7yk1G6UD+I4dL2PNRVZm4XPCDehy+QgGtVRhJuQ9WhcuiyGm7iMRlY+yZ/hvpO7iP583q1jCDeSw3YkbzY+whro5QRcWo5XsIampiebq+DWZKzDLui+4mEH5qOtl6ZAH3sPQb+5IdRNa+yE1tQDdM1wbSXeIXwtf8FGxLYZWiNc8w1WwKVpmOgz+3csRNUW4wesNd/D5X2YTkJrYCHmiccYrLUKuqAk7zSsYYV7qJp+xlqr4PI46DCsYYWLqNolWGsVdPInbxH+9wRlA6q2CdZaolnDcGk/9Lm6PPQMYtOXrOX1NGMPXNNTlKvQPxPoqzBd9+umL2DvQGtewQja2tqS1en8A7p+OYUFMFvFAAAAAElFTkSuQmCC";
      // otherTitleIconLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVGhD7dYxDYBAEETRFYECKkRQIgARBA1IQAEi0IInmKPeGu4m/yW/2mq6DQDAX3aDZhW3QYdKD63FkNp6h6wGjQoAABSnQYtKf5fW4vutLa8hk0GDAgAAxWXQptLfpbX4fmvLa0hvUKcAAF+LeABZddsp++ZlVAAAAABJRU5ErkJggg==";

      appetizers = (
        <div>
          {this.state.appetizer.map((appetizer,index) =>{
              return(<MenuItem click = {() => this.appClickHandler(index)} deleteSingle = {()=>this.deleteSingleApp(index)} name = {appetizer.name} price = {appetizer.price} quantity = {appetizer.quantity} category = {appetizer.category} boolIsCart = {false}/>)
          })}
        </div> 
      );
      entrees = (
        <div>
          {this.state.entree.map((entree,index) =>{
              return(<MenuItem click = {() => this.entreeClickHandler(index)} deleteSingle = {()=>this.deleteSingleEntree(index)} name = {entree.name} price = {entree.price} quantity = {entree.quantity} category = {entree.category} boolIsCart = {false}/>)
          })}
        </div> 
      );
      desserts = (
        <div>
          {this.state.dessert.map((dessert,index) =>{
              return(<MenuItem click = {() => this.dessertClickHandler(index)} deleteSingle = {()=>this.deleteSingleDessert(index)} name = {dessert.name} price = {dessert.price} quantity = {dessert.quantity} category = {dessert.category} boolIsCart = {false}/>)
          })}
        </div> 
      );
      //sets text to the different parts of the menus
      different = <Accordion defaultActiveKey = "0" className = "menu" onChange = {this.onChange}>

      <Accordion.Panel
        header = "Hot Drinks"
        // thumb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALoSURBVGhD7ZpLqE1RGICvRyiEgYE8ihQGFDKS5C1mSlFMlFLII+5EESmRkSiKpAxQoigG8sxE8hiQPCMZkPf7Eb5vdXede9omZ++19z65X33d/nVOa+3/7LXWXnut29LBf0h/fIW7Q9TETME/eCFETcxiNJHDIWpijqCJLAtRkzIBv+Nb7GVBDd3a/laekfgcvRvrLKhhMH7APSGqMGPxJZrEceyEtczB5LPK4p2wK3mhJzCtC21GP98aogrSA++gF3kQu2A94/Aj/kaTriRL0SSuYFoSk/A9+p3tFlSVa+hFTgtRe4bjO/Tz/ZiWaCWwW/3Cn5h2kUfRJPZi/eCvFIPQC30WovZ0RxN0bNQ/TyqHs9M5dEaqZwSa5K0QNTG98RKuCVEH+dAHhxVktBnN/v8a7edFuAuj4N2wAVey1yP6AG3nNEYhSeRpiOIxF23HlcH4Nseg03cuFJ1Ivd9wPWam6ERcyiTd7Sb+QMtnYyaKTqR+jKxGyzO/iJWdyBK0/ECIMlB2Iq1oeeZpuexEdqLlJpSJshNxnWa5n2eizERcsvgK8BUzvwKUlUhPPI+W+UKWmaITuYEb8XFb/ATdDM9MkogbbjFJEqn1Mg7BXOiMPl1dNMYk2fB+hFtwIuaOldvI0BDFwQ0729gQokh4LGAjK0MUh9toG9NDFIkZaCMPMcZO+iy0fieUrhbEwnHiatTGtlmQI04m99G6V1kQm9Hou4H7tissyIF+eBFNwr+F7UAuwOT9wHGTZWp0urWrWtc9HIi5468//x8eQhtX79AZdEG3CNO+X6sb3TvwLiZ1fMblmPb9eWjXawhv7xdMGirbTMuTN2glV/FYSb5Ar8E72DBJ9zmFZRwBeAxhl/MaJlvQKD7Bk0MZf50BWBQz0YWibZ+0ICtT0dNXK/yEHtB4Xp42KLO6ED399T8kbE9dMDY80OvxFp/FpPIi9MfbhFHO4kfhWnQDYF8kHdQ+p/piB01MS8tfIzFsVRXqxbsAAAAASUVORK5CYII=">
        >
        <List>{appetizers}</List>
      </Accordion.Panel>
      <Accordion.Panel header = "Cold Drinks">
        <List>{entrees}</List>
      </Accordion.Panel>
      <Accordion.Panel header = "Desserts">
        <List>{desserts}</List>
      </Accordion.Panel>
      </Accordion>;
    }
    else if (this.state.showMenu === 1){ //HANDLES THE CART SCREEN
      title = "Cart";
      otherTitle = "Menu";
      // otherTitleIconLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJHSURBVGhD7dpNiE1hHMfxKzWNQpnCAgsalCQvG7uhpBRZTNhYULLxkrKQpZRIMqXYSSJvk0JKsbBgxcZCCkWUbLDwkih8f4tTT6f/uPc85/k/t1PnW5/lPP/zzNxzzr3nTqetra3nZuI8nuBp4CbmoTHdwt8JPEBjegFrE4WlaER7YW2gcBaNaRm2YQsuINzIN1zvk2s4iEmo3Fz8RriZftNmohqHtWC/3EZUa2Et2C86j6PSa/I5rEVze40BRLcP1sK5jaJW0/EV1uK5PEbUFavcOVgDcviD1UiS7urWkBx0D0naQ1iDPP3EAiRtK6xhnk4hebr0fYA10MMnzIBLR2AN9XAAbs1BjvdftW9+vXQD1vCUat/8emkNrOGpJLv5dUtDXsI6iLqS3vy6tQS/YB1IXSeRJf01HsE6iDreQm/Rs7yk1G6UD+I4dL2PNRVZm4XPCDehy+QgGtVRhJuQ9WhcuiyGm7iMRlY+yZ/hvpO7iP583q1jCDeSw3YkbzY+whro5QRcWo5XsIampiebq+DWZKzDLui+4mEH5qOtl6ZAH3sPQb+5IdRNa+yE1tQDdM1wbSXeIXwtf8FGxLYZWiNc8w1WwKVpmOgz+3csRNUW4wesNd/D5X2YTkJrYCHmiccYrLUKuqAk7zSsYYV7qJp+xlqr4PI46DCsYYWLqNolWGsVdPInbxH+9wRlA6q2CdZaolnDcGk/9Lm6PPQMYtOXrOX1NGMPXNNTlKvQPxPoqzBd9+umL2DvQGtewQja2tqS1en8A7p+OYUFMFvFAAAAAElFTkSuQmCC";
      titleIconLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVGhD7dYxDYBAEETRFYECKkRQIgARBA1IQAEi0IInmKPeGu4m/yW/2mq6DQDAX3aDZhW3QYdKD63FkNp6h6wGjQoAABSnQYtKf5fW4vutLa8hk0GDAgAAxWXQptLfpbX4fmvLa0hvUKcAAF+LeABZddsp++ZlVAAAAABJRU5ErkJggg==";

      menuItems = (
        <div>
          {this.state.cart.map((cart,index) =>{
              return(<MenuItem click = {() => this.addFromCart(index)} deleteSingle = {()=>this.deleteSingleCart(index)} deleteAll = {() => this.deleteAllOfOne(index)} name = {cart.name} price = {cart.price} quantity = {cart.quantity} boolIsCart = {true}/>);
          })}
        </div> 
      );
      // What the content of the cart looks like
      let a;
      if(this.state.cart.length === 0){
        a = <h2>Add something to the cart!</h2>//YOU CAN RESTYLE THIS IF YOU WANT
      }else{
        a = <Button className = "checkoutButton" type = "primary" onClick = {this.checkOutClicked.bind(this, "Menu")} > Checkout </Button>;

      }
      different = (
        <span>
          <List>{menuItems}</List>
          {/* Don't totally understand how onClick works, why did I put "Menu" in there? Just copied from below - Ron */}
          {a}
        </span>
      );
    }
    else if (this.state.showMenu === 2){ //HANDLES THE CHECKOUT SCREEN
      title = "Checkout";
      otherTitle = "Cart";
      menuItems = (
        <div>
          {this.state.cart.map((cart,index) =>{
            return(<p>{cart.name} num:{cart.quantity} cost:${cart.quantity *cart.price}</p>)
          })}
        </div>
      );
      different = (
        <span>
          <List>{menuItems}</List>
          <Button className = "finalizeOrder" type = "primary" onClick = {this.finalizeOrder.bind(this,"Menu")}>Finalize Order</Button>
        </span>
      );
    }
    else if(this.state.showMenu === 3){
      return(<h1>THANK YOU FOR YOUR ORDER</h1>);//this will end up being the payment screen i think
    }
    var clearCartButton = <div><WhiteSpace/><WhiteSpace/><WhiteSpace/></div>;
    if(this.state.showMenu !== 2){
      clearCartButton = <Button type = "ghost"
      inline style={{ marginRight: '4px' }} 
      onClick={this.clearCart.bind(this, "Menu")}>Clear Cart</Button>;
    }
    return (
      <div className="App">
        <NavBar mode = "dark">
          Red Rock Coffee - {title}
        </NavBar>

        <p>Subtotal: ${subtotal}</p>
        <WhiteSpace />
        <Button 
          type = "primary" 
          icon = {<img src ={titleIconLink} />}
          inline style={{ marginRight: '4px', float: 'right', paddingRight: '6px'}}
          onClick={this.showItemHandler.bind(this, "Menu")}>
          {/* <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJHSURBVGhD7dpNiE1hHMfxKzWNQpnCAgsalCQvG7uhpBRZTNhYULLxkrKQpZRIMqXYSSJvk0JKsbBgxcZCCkWUbLDwkih8f4tTT6f/uPc85/k/t1PnW5/lPP/zzNxzzr3nTqetra3nZuI8nuBp4CbmoTHdwt8JPEBjegFrE4WlaER7YW2gcBaNaRm2YQsuINzIN1zvk2s4iEmo3Fz8RriZftNmohqHtWC/3EZUa2Et2C86j6PSa/I5rEVze40BRLcP1sK5jaJW0/EV1uK5PEbUFavcOVgDcviD1UiS7urWkBx0D0naQ1iDPP3EAiRtK6xhnk4hebr0fYA10MMnzIBLR2AN9XAAbs1BjvdftW9+vXQD1vCUat/8emkNrOGpJLv5dUtDXsI6iLqS3vy6tQS/YB1IXSeRJf01HsE6iDreQm/Rs7yk1G6UD+I4dL2PNRVZm4XPCDehy+QgGtVRhJuQ9WhcuiyGm7iMRlY+yZ/hvpO7iP583q1jCDeSw3YkbzY+whro5QRcWo5XsIampiebq+DWZKzDLui+4mEH5qOtl6ZAH3sPQb+5IdRNa+yE1tQDdM1wbSXeIXwtf8FGxLYZWiNc8w1WwKVpmOgz+3csRNUW4wesNd/D5X2YTkJrYCHmiccYrLUKuqAk7zSsYYV7qJp+xlqr4PI46DCsYYWLqNolWGsVdPInbxH+9wRlA6q2CdZaolnDcGk/9Lm6PPQMYtOXrOX1NGMPXNNTlKvQPxPoqzBd9+umL2DvQGtewQja2tqS1en8A7p+OYUFMFvFAAAAAElFTkSuQmCC" /> */}
        </Button>
        <WhiteSpace />
        {clearCartButton}

        {different}
      </div>
    );
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
