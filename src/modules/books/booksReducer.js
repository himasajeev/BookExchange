import * as actionTypes from '../actionTypes';

const booksReducer = (state = {}, action) => {
  const { data } = action;
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_BOOKS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_BOOKS_SUCCEEDED:
      return {
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
