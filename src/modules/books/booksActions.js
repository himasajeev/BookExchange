import * as actionTypes from '../actionTypes';

export const getBooks = (token, search, phase) => ({
  type: actionTypes.GET_BOOKS_REQUESTED,
  token,
  search,
  phase,
});
