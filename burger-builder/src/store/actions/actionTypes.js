//BurgerBuilder
export const ADD_INGREDIENT = 'ADD_INGREDIENT'; 
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'; 
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';

//Checkout to firebase with redux
export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';

// Approach for redirect - this is only redux approach
// this type will be dispatched whenever we load the checkout page.
export const PURCHASE_INIT = 'PURCHASE_INIT';

// fetching order with redux
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';