import * as actionTypes from '../actionTypes';

export const getAuthors = token => ({
  type: actionTypes.GET_AUTHORS_REQUESTED,
  token,
});
