import userReducer from './userReducer';
import * as actionTypes from '../actionTypes';

describe('Books Reducer', () => {
  it('has a default state', () => {
    const state = undefined;
    const action = { type: '' };

    const defaultState = {};

    const result = userReducer(state, action);
    expect(result).toEqual(defaultState);
  });

  it('can handle default action type', () => {
    const state = {
      email: 'gurgul@wp.pl',
      token: 'abcd',
      isLoading: false,
    };

    const action = { type: '' };
    const result = userReducer(state, action);
    expect(result).toEqual(state);
  });

  it('can handle LOGIN_USER_REQUESTED, REGISTER_USER_REQUESTED action type, and change isLoading to true', () => {
    const state = {};

    const expected = {
      isLoading: true,
    };

    const action = { type: actionTypes.LOGIN_USER_REQUESTED };
    const result = userReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle LOGIN_USER_SUCCEEDED, REGISTER_USER_SUCCEEDED action type, replace old data with new and set isLoading to false', () => {
    const state = {
      isLoading: true,
    };

    const data = { token: 'abcd' };
    const expected = { token: 'abcd', isLoading: false };

    const action = { type: actionTypes.LOGIN_USER_SUCCEEDED, ...data };
    const result = userReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle LOGIN_USER_FAILED, REGISTER_USER_FAILED action type, replace old data with new and set isLoading to false', () => {
    const state = {
      isLoading: true,
    };
    const error = { type: 0, text: 'Incorrect credentials' };

    const expected = { isLoading: false, error };

    const action = { type: actionTypes.LOGIN_USER_FAILED, error };
    const result = userReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle LOGOUT_USER_SUCCEEDED, REMOVE_TOKEN action types, and change isLoading to false', () => {
    const state = {
      email: 'gurgul@wp.pl',
      token: 'abcd',
      isLoading: false,
    };

    const expected = {};

    const action = { type: actionTypes.LOGOUT_USER_SUCCEEDED };
    const result = userReducer(state, action);
    expect(result).toEqual(expected);
  });
});
