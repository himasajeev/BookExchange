import * as actionTypes from '../actionTypes';

const authorsReducer = (state = {}, action) => {
  const { authors } = action;
  switch (action.type) {
    case actionTypes.GET_AUTHORS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_AUTHORS_SUCCEEDED:
      return {
        authors,
        isLoading: false,
      };
    case actionTypes.GET_AUTHOR_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authorsReducer;
