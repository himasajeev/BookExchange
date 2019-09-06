import * as actionTypes from '../actionTypes';

const categoriesReducer = (state = {}, action) => {
  const { categories } = action;
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCEEDED:
      return {
        categories,
        isLoading: false,
      };
    case actionTypes.GET_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
