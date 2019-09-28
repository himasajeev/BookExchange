import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import styled from '@emotion/styled';
import { PADDING } from '../../styles/padding';

const StyledTextField = styled(TextField)`
  margin: ${PADDING.SMALL} 0;
`;

const debounceTimer = 300;

const SearchInput = ({ name, setValue, type, onClick }) => {
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

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  );
  return (
    <StyledTextField
      onChange={searchUpdate}
      placeholder="Szukaj..."
      name={name}
      type={type}
      InputProps={{ endAdornment }}
    />
  );
};

SearchInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchInput;
