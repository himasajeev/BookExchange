import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { debounce } from 'lodash';

import { MdSearch } from 'react-icons/md';
import Input from '../Input/Input';

const StyledInput = styled(Input)`
  width: 100%;
`;

const Icon = styled(MdSearch)`
  position: absolute;
  right: 0px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const debounceTimer = 500;

const SearchBar = ({ value, setValue, search, placeholder }) => {
  React.useEffect(debounce(search(value), debounceTimer), [value]);

  return (
    <Wrapper>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
      <Icon onClick={search} />
    </Wrapper>
  );
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
