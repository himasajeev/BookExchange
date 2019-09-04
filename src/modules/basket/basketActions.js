import * as actionTypes from '../actionTypes';

export const addToBasket = book => ({
  type: actionTypes.ADD_TO_BASKET,
  book,
});

export const removeFromBasket = id => ({
  type: actionTypes.REMOVE_FROM_BASKET,
  id,
});
