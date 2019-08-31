import { combineReducers } from 'redux';

import books from './books/booksReducer';

export default combineReducers({
  books,
});
