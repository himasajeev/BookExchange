import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getBooks = (token, search, phase) => ({
  type: actionTypes.GET_BOOKS_REQUESTED,
  token,
  search,
  phase,
});
