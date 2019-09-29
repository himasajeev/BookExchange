import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import styled from '@emotion/styled';
import { PADDING } from '../../styles/padding';

const StyledFormControl = styled(FormControl)`
  margin: ${PADDING.SMALL} 0;
`;

const PassInput = ({ value, name, onChange, label }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <StyledFormControl>
      <InputLabel htmlFor="adornment-password">Password</InputLabel>
      <Input
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleShowPasswordChange}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};
PassInput.defaultProps = {
  value: '',
};

PassInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PassInput;
