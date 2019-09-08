import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Store from './Store';
import { addToBasket } from '../../modules/basket/basketActions';
import { getBooks, getBooksSearch } from '../../modules/books/booksActions';
import { getAuthors } from '../../modules/authors/authorsActions';
import { getCategories } from '../../modules/categories/categoriesActions';
import { getPublishers } from '../../modules/publishers/publishersActions';

const mapStateToProps = state => {
  const books = get(state, 'books.data');
  const { isLoading } = state.books;
  // const { token } = state.user;
  const publishers = get(state, 'publishers.data');
  const categories = get(state, 'categories.data');
  const authors = get(state, 'authors.data');

  return {
    books,
    isLoading,
    // token,
    publishers,
    categories,
    authors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToBasket,
      getBooks,
      getBooksSearch,
      getAuthors,
      getCategories,
      getPublishers,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store);
