import { combineReducers } from 'redux';

import books from './books/booksReducer';
import basket from './basket/basketReducer';

export default combineReducers({
  books,
  basket,
});
