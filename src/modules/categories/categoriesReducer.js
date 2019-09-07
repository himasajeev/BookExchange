import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const categoriesReducer = (state = {}, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUESTED:
      return {
        ...omit(state, ['error']),
        isLoading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCEEDED:
      return {
        data,
        isLoading: false,
      };
    case actionTypes.GET_CATEGORIES_FAILED:
      return {
        ...omit(state, ['data']),
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
