import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { debounce } from 'lodash';

import { MdSearch } from 'react-icons/md';
import { PADDING } from '../../styles/padding';

const StyledInput = styled.input`
  margin: ${PADDING.SMALL} 0;
  width: 100%;
  font-size: 20px;
  padding: ${PADDING.SMALL} ${PADDING.X_LARGE} ${PADDING.SMALL} ${PADDING.SMALL};
  border: 1px black solid;
`;

const Icon = styled(MdSearch)`
  position: absolute;
  right: 0;
  top: 10px;
  font-size: 30px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const debounceTimer = 500;

const SearchInput = ({ name, setValue, placeholder, type }) => {
  const debounceUpdate = debounce(
    newValue => setValue(newValue),
    debounceTimer,
  );

  const searchUpdate = React.useCallback(
    event => {
      debounceUpdate(event.target.value);
    },
    [debounceUpdate],
  );

  return (
    <Wrapper>
      <StyledInput
        placeholder={placeholder}
        onChange={searchUpdate}
        name={name}
        type={type}
      />
      <Icon />
    </Wrapper>
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search...',
  // value: '',
};

SearchInput.propTypes = {
  // value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchInput;
