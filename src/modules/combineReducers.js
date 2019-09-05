import { combineReducers } from 'redux';

import books from './books/booksReducer';
import basket from './basket/basketReducer';
import user from './user/userReducer';

export default combineReducers({
  books,
  basket,
  user,
});
