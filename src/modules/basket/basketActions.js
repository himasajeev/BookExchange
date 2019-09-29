import * as actionTypes from '../actionTypes';

export const addToBasket = (book, token, phase) => ({
  type: actionTypes.ADD_TO_BASKET_REQUESTED,
  book,
  token,
  phase,
});

export const removeFromBasket = id => ({
  type: actionTypes.REMOVE_FROM_BASKET,
  id,
});

export const orderBasket = (basket, phase, token, history, paySelectValue) => ({
  type: actionTypes.ORDER_BASKET_REQUESTED,
  basket,
  phase,
  token,
  history,
  paySelectValue,
});
