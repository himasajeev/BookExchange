import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

const SearchBar = ({ name, value, setValue, placeholder, type }) => {
  return (
    <Wrapper>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChange={setValue}
        name={name}
        type={type}
      />
      <Icon />
    </Wrapper>
  );
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  value: '',
};

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchBar;
