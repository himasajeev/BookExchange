import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { omit } from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import BounceLoader from 'react-spinners/BounceLoader';
import Paper from '@material-ui/core/Paper';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Loading from '../../components/Loading/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';
import Select from '../../components/Select/Select';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';

const StyledWrapper = styled.div`
  width: 90%;
  margin: ${PADDING.LARGE} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  padding: ${PADDING.LARGE};
  display: flex;
  flex-direction: column;
`;

const LOAD_AMOUNT = 20;

const Store = ({
  books,
  addToBasket,
  getBooks,
  isLoading,
  token,
  publishers,
  categories,
  authors,
  phase,
}) => {
  const [searchValue, setSearchValue] = React.useState({});
  const [loadedBooks, setLoadedBooks] = React.useState(0);

  const getBooksWithData = React.useCallback(() => {
    getBooks(token, searchValue, phase);
  }, [getBooks, phase, searchValue, token]);

  React.useEffect(() => {
    if (phase) getBooksWithData();
  }, [getBooks, getBooksWithData, phase, searchValue, token]);

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

  const loadMore = () => {
    setLoadedBooks(loadedBooks + LOAD_AMOUNT);
  };

  const bookItems = [...books.slice(0, loadedBooks + LOAD_AMOUNT)].map(book => (
    <Book
      book={book}
      onButtonClick={addToBasket}
      key={book.id}
      type={BOOK_POSITION.STORE}
      phase={phase}
    />
  ));

  const hasMore = bookItems.length < books.length;

  const { search, publisher, category, author } = searchValue;
  return (
    <StyledWrapper>
      <Loading isLoading={isLoading}>
        <StyledPaper>
          <SearchInput
            name="search"
            setValue={handleSearchInputChange}
            onClick={getBooksWithData}
            type="text"
          />
          <Select
            name="publisher"
            onChange={handleSearchChange}
            placeholder="Wybierz wydawnictwo"
            options={publishers}
            label="Wydawnictwo"
            isClearable
          />
          <Select
            name="category"
            onChange={handleSearchChange}
            placeholder="Wybierz przedmiot"
            options={categories}
            label="Przedmiot"
            isClearable
          />
          <Select
            name="author"
            onChange={handleSearchChange}
            placeholder="Wybierz autora"
            options={authors}
            label="Autor"
            isClearable
          />
        </StyledPaper>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <StyledLoaderContainer>
              <BounceLoader
                loading
                color={COLORS.LOADER_COLOR}
                sizeUnit="px"
                size={150}
              />
            </StyledLoaderContainer>
          }
        >
          <StyledBookWrapper>{bookItems}</StyledBookWrapper>
        </InfiniteScroll>
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
  phase: 0,
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
  phase: PropTypes.number,
};

export default Store;
