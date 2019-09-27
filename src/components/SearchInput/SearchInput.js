import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // margin: {
  //   margin: theme.spacing(1),
  // },
  textField: {
    width: '100%',
  },
}));

const debounceTimer = 300;

const SearchInput = ({ name, setValue, type }) => {
  const classes = useStyles();

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
    <TextField
      onChange={searchUpdate}
      placeholder="Szukaj..."
      className={clsx(classes.textField)}
      name={name}
      type={type}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

// SearchInput.defaultProps = {
//   placeholder: 'Search...',
//   // value: '',
// };

SearchInput.propTypes = {
  // value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  // placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchInput;
