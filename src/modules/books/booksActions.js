import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getBooks = token => ({
  type: actionTypes.GET_BOOKS_REQUESTED,
  token,
});

export const getBooksSearch = (token, search) => ({
  type: actionTypes.GET_BOOKS_SEARCH_REQUESTED,
  token,
  search,
});
