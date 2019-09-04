import booksReducer from './booksReducer';
import * as actionTypes from '../actionTypes';

describe('Books Reducer', () => {
  it('has a default state', () => {
    const state = undefined;
    const action = { type: '' };

    const defaultState = {};

    const result = booksReducer(state, action);
    expect(result).toEqual(defaultState);
  });

  it('can handle default action type', () => {
    const state = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: false,
    };

    const action = { type: '' };
    const result = booksReducer(state, action);
    expect(result).toEqual(state);
  });

  it('can handle GET_BOOKS_REQUESTED action type, and change isLoading to true', () => {
    const state = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: false,
    };

    const expected = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: true,
    };

    const action = { type: actionTypes.GET_BOOKS_REQUESTED };
    const result = booksReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_BOOKS_SUCCEEDED action type, replace old data with new and remove loading', () => {
    const state = {
      data: [
        {
          book: 'Harry potter',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: true,
    };

    const data = [
      {
        book: 'Matematyka dla kierunkow ekonomicznych',
        author: 'Henryk Gurgul',
      },
      {
        book: 'Analiza zdarzen na rynkach akcji',
        author: 'Henryk Gurgul',
      },
    ];

    const expected = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: false,
    };

    const action = { type: actionTypes.GET_BOOKS_SUCCEEDED, data };
    const result = booksReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_BOOKS_FAILED action type, and change isLoading to false', () => {
    const state = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: true,
    };

    const expected = {
      data: [
        {
          book: 'Matematyka dla kierunkow ekonomicznych',
          author: 'Henryk Gurgul',
        },
        {
          book: 'Analiza zdarzen na rynkach akcji',
          author: 'Henryk Gurgul',
        },
      ],
      isLoading: false,
    };

    const action = { type: actionTypes.GET_BOOKS_FAILED };
    const result = booksReducer(state, action);
    expect(result).toEqual(expected);
  });
});
