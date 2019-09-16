import * as actionTypes from '../actionTypes';

export const getPublishers = token => ({
  type: actionTypes.GET_PUBLISHERS_REQUESTED,
  token,
});
