import * as actionTypes from '../actionTypes';

const phaseReducer = (state = {}, action) => {
  const { phase, error } = action;
  switch (action.type) {
    case actionTypes.GET_PHASE_SUCCEEDED:
      return { ...phase };
    case actionTypes.GET_PHASE_FAILED:
      return { error };
    default:
      return state;
  }
};

export default phaseReducer;
