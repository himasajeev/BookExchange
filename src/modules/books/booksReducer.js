import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const booksReducer = (state = {}, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.GET_BOOKS_REQUESTED:
    case actionTypes.GET_BOOKS_SEARCH_REQUESTED:
      return {
        ...omit(state, ['error']),
        isLoading: true,
      };
    case actionTypes.GET_BOOKS_SUCCEEDED:
    case actionTypes.GET_BOOKS_SEARCH_SUCCEEDED:
      return {
        ...state,
        data,
        isLoading: false,
      };
    case actionTypes.GET_BOOKS_FAILED:
    case actionTypes.GET_BOOKS_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default booksReducer;
