import * as actionTypes from '../actionTypes';

export const getRecommended = (token, phase) => ({
  type: actionTypes.GET_RECOMMENDED_REQUESTED,
  token,
  phase,
});
