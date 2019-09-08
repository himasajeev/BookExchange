import { combineReducers } from 'redux';

import books from './books/booksReducer';
import basket from './basket/basketReducer';
import user from './user/userReducer';
import authors from './authors/authorsReducer';
import categories from './categories/categoriesReducer';
import publishers from './publishers/publishersReducer';
import overview from './overview/overviewReducer';
import phase from './phase/phaseReducer';

export default combineReducers({
  books,
  basket,
  user,
  authors,
  categories,
  publishers,
  overview,
  phase,
});
