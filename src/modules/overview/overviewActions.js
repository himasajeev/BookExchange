import * as actionTypes from '../actionTypes';

export const getOverview = token => ({
  type: actionTypes.GET_OVERVIEW_REQUESTED,
  token,
});
