import { GET_MENU } from '../actions/types'

const initialState = {
    menuItems: [
        {category: "Appetizer", name: "Salad", price: 5, quantity: 0},
        {category: "Appetizer", name: "Soup", price: 4, quantity: 0},
        {category: "Appetizer", name: "Fruit", price: 6, quantity: 0},
        {category: "Appetizer", name: "Pig Intestine", price: 10, quantity: 0},
        {category: "Appetizer", name: "Cucumber", price: 7, quantity: 0},
        {category: "Entrees", name: "Kung Pao Chicken", price: 14, quantity: 0}
        // {category: "Entrees", name: "Pad Thai", price: 17, quantity: 0},
        // {category: "Entrees", name: "Shawarma", price: 22, quantity: 0},
        // {category: "Entrees", name: "Butter Chicken", price: 12, quantity: 0},
        // {category: "Entrees", name: "Steak Burrito", price: 21, quantity: 0},
        // {category: "Drinks", name: "Mango Lassi", price: 6, quantity: 0},
        // {category: "Drinks", name: "Coffee", price: 3, quantity: 0},
        // {category: "Drinks", name: "Coke", price: 3, quantity: 0},
        // {category: "Drinks", name: "Beer", price: 4, quantity: 0},
        // {category: "Desserts", name: "Cake", price: 5, quantity: 0},
        // {category: "Desserts", name: "Cookie", price: 2, quantity: 0},
    ],
    // loading: false

}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_MENU: 
            return {
                ...state,
                // menuItems: action.payload,
                // loading: false
            };
        // case ITEMS_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        default:
            return state
    }
};