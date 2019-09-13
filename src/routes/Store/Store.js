/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import styled from '@emotion/styled';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Loading from '../../components/Loading/Loading';
import Select from '../../components/Select/Select';
import SearchBar from '../../components/SearchBar/SearchBar';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Store = ({
  books,
  addToBasket,
  // getBooks,
  getAuthors,
  getCategories,
  getPublishers,
  getBooksSearch,
  isLoading,
  token,
  publishers,
  categories,
  authors,
}) => {
  React.useEffect(() => {
    // getBooks(token);
    getAuthors(token);
    getCategories(token);
    getPublishers(token);
  }, [getAuthors, getCategories, getPublishers, token]);

  const [searchValue, setSearchValue] = React.useState({});

  React.useEffect(() => {
    getBooksSearch(token, searchValue);
  }, [getBooksSearch, searchValue, token]);

  const handleSearchChange = event => {
    setSearchValue({ ...searchValue, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <SearchBar
        name="search"
        value={searchValue.search}
        setValue={handleSearchChange}
        type="text"
      />
      <div>
        <Select
          name="publisher"
          onChange={handleSearchChange}
          value={searchValue.publisher}
          defaultValue="Wybierz wydawnictwo"
          options={publishers}
          title="Wydawnictwo"
        />
        <Select
          name="category"
          onChange={handleSearchChange}
          defaultValue="Wybierz kategorie"
          value={searchValue.category}
          options={categories}
          title="Kategorie"
        />
        <Select
          name="author"
          onChange={handleSearchChange}
          defaultValue="Wybierz autora"
          value={searchValue.author}
          options={authors}
          title="Autor"
        />
      </div>
      <Loading isLoading={isLoading}>
        <div>
          {books.map(book => (
            <Book
              book={book}
              onButtonClick={addToBasket}
              key={book.id}
              type={BOOK_POSITION.STORE}
            />
          ))}
        </div>
      </Loading>
    </Wrapper>
  );
};

Store.defaultProps = {
  books: [],
  publishers: [],
  categories: [],
  authors: [],
  isLoading: false,
  token: '',
};

Store.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})),
  publishers: PropTypes.arrayOf(PropTypes.shape({})),
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  authors: PropTypes.arrayOf(PropTypes.shape({})),
  // getBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  token: PropTypes.string,
};
export default Store;
