import basketReducer from './basketReducer';
import * as actionTypes from '../actionTypes';

describe('Basket Reducer', () => {
  it('has a default state', () => {
    const state = undefined;
    const action = { type: '' };

    const defaultState = {};

    const result = basketReducer(state, action);
    expect(result).toEqual(defaultState);
  });

  it('can handle default action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const action = { type: '' };
    const result = basketReducer(state, action);
    expect(result).toEqual(state);
  });

  it('can handle ADD_TO_BASKET action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const newBook = {
      '3': {
        book: 'Wladca Pierscieni',
        autor: 'J.R.R. Tolkien',
        state: 'used',
      },
    };

    const expected = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
        '3': {
          book: 'Wladca Pierscieni',
          autor: 'J.R.R. Tolkien',
          state: 'used',
        },
      },
    };

    const action = { type: actionTypes.ADD_TO_BASKET, book: newBook };
    const result = basketReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle REMOVE_FROM_BASKET action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const expected = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
      },
    };

    const id = 2;

    const action = { type: actionTypes.REMOVE_FROM_BASKET, id };
    const result = basketReducer(state, action);

    expect(result).toEqual(expected);
  });
  it('can handle ORDER_BASKET_REQUESTED action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const expected = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
      isLoading: true,
    };

    const action = { type: actionTypes.ORDER_BASKET_REQUESTED };
    const result = basketReducer(state, action);
    expect(result).toEqual(expected);
  });
  it('can handle ORDER_BASKET_SUCCEEDED action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const expected = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
      isLoading: false,
    };

    const action = { type: actionTypes.ORDER_BASKET_SUCCEEDED };
    const result = basketReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle ORDER_BASKET_FAILED action type', () => {
    const state = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
    };

    const expected = {
      data: {
        '1': {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
          state: 'used',
        },
        '2': {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
          state: 'new',
        },
      },
      isLoading: false,
      error: 'error',
    };

    const error = 'error';

    const action = { type: actionTypes.ORDER_BASKET_FAILED, error };
    const result = basketReducer(state, action);
    expect(result).toEqual(expected);
  });
});
