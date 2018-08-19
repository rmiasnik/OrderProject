import { combineReducers } from 'redux';
import menuItemReducer from './menuItemReducer';

export default combineReducers({
    menuItem: menuItemReducer
});