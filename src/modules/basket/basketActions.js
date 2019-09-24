import * as actionTypes from '../actionTypes';

export const addToBasket = book => ({
  type: actionTypes.ADD_TO_BASKET,
  book,
});

export const removeFromBasket = id => ({
  type: actionTypes.REMOVE_FROM_BASKET,
  id,
});

export const orderBasket = (basket, phase, token, history) => ({
  type: actionTypes.ORDER_BASKET_REQUESTED,
  basket,
  phase,
  token,
  history,
});
