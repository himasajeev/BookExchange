import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getCategories = token => ({
  type: actionTypes.GET_CATEGORIES_REQUESTED,
  token,
});
