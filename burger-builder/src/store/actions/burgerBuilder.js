import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

//synchronous
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

//synchronous
export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

// ASYNCHRONOUS
export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-js-burger-builder-b16e7-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data));
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed());
        });
    }
}