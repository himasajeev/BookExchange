import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const basketReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        ...action.book,
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return omit(state, [action.id]);
    default:
      return state;
  }
};

export default basketReducer;
