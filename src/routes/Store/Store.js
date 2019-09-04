import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Loading from '../../components/Loading/Loading';

const Store = ({ books, addToBasket, getBooks, isLoading }) => {
  React.useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div>
      <Loading isLoading={isLoading}>
        <div>
          {books.map(book => (
            <Book
              {...book}
              onButtonClick={addToBasket}
              key={book.id}
              type={BOOK_POSITION.STORE}
            />
          ))}
        </div>
      </Loading>
    </div>
  );
};

Store.defaultProps = {
  books: [],
  isLoading: false,
};

Store.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})),
  getBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
export default Store;
