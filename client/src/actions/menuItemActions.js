import axios from 'axios';
import { GET_MENU , ITEMS_LOADING} from './types';

export const getMenu = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/').then(res =>
        dispatch({
            type: GET_MENU,
            payload: res.data
        })

    );

};


// export const getMenu = () => {
//     return {
//         type: GET_MENU
//     };
// }

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}