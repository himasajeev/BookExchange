import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const booksReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.GET_BOOKS_REQUESTED:
      return {
        ...omit(state, ['error']),
        isLoading: true,
      };
    case actionTypes.GET_BOOKS_SUCCEEDED:
      return {
        ...state,
        data,
        isLoading: false,
      };
    case actionTypes.GET_BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default booksReducer;
