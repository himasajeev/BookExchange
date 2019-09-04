import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Store from './Store';
import { addToBasket } from '../../modules/basket/basketActions';
import { getBooks } from '../../modules/books/booksActions';

const mapStateToProps = state => {
  const books = get(state, 'books.data');
  const { isLoading } = state.books;
  console.log(books);
  return {
    books,
    isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToBasket,
      getBooks,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store);
