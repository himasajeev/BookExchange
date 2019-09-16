import * as actionTypes from '../actionTypes';

export const getCategories = token => ({
  type: actionTypes.GET_CATEGORIES_REQUESTED,
  token,
});
