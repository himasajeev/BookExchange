/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { omit } from 'lodash';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Loading from '../../components/Loading/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';
import Select from '../../components/Select/Select';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Store = ({
  books,
  addToBasket,
  getAuthors,
  getCategories,
  getPublishers,
  getBooks,
  isLoading,
  token,
  publishers,
  categories,
  authors,
  phase,
}) => {
  const [searchValue, setSearchValue] = React.useState({});

  React.useEffect(() => {
    getAuthors(token);
    getCategories(token);
    getPublishers(token);
  }, [getAuthors, getCategories, getPublishers, token]);

  React.useEffect(() => {
    if (phase) getBooks(token, searchValue, phase);
  }, [getBooks, phase, searchValue, token]);

  const handleSearchInputChange = search => {
    setSearchValue({ ...searchValue, search });
  };

  const handleSearchChange = (selected, element) => {
    const { name, action } = element;
    switch (action) {
      case 'select-option':
        setSearchValue({ ...searchValue, [name]: selected.value });
        break;
      case 'clear':
        setSearchValue({ ...omit(searchValue, [name]) });
        break;
      default:
        break;
    }
  };

  const { search } = searchValue;
  return (
    <StyledWrapper>
      <SearchInput
        name="search"
        value={search}
        setValue={handleSearchInputChange}
        type="text"
      />
      <div>
        <Select
          name="publisher"
          onChange={handleSearchChange}
          placeholder="Wybierz wydawnictwo"
          options={publishers}
          title="Wydawnictwo"
          isClearable
        />
        <Select
          name="category"
          onChange={handleSearchChange}
          placeholder="Wybierz kategorie"
          options={categories}
          title="Kategorie"
          isClearable
        />
        <Select
          name="author"
          onChange={handleSearchChange}
          placeholder="Wybierz autora"
          options={authors}
          title="Autor"
          isClearable
        />
      </div>
      <Loading isLoading={isLoading}>
        <StyledBookWrapper>
          {books.map(book => (
            <Book
              book={book}
              onButtonClick={addToBasket}
              key={book.id}
              type={BOOK_POSITION.STORE}
              phase={phase}
            />
          ))}
        </StyledBookWrapper>
      </Loading>
    </StyledWrapper>
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
  getBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  token: PropTypes.string,
};

export default Store;
