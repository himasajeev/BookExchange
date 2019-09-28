import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import { PADDING } from '../../styles/padding';

const StyledTextField = styled(TextField)`
  margin: ${PADDING.SMALL} 0;
`;

const NamedInput = ({ value, name, onChange, label, type }) => {
  return (
    <StyledTextField
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
};
NamedInput.defaultProps = {
  value: '',
  type: '',
};

NamedInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default NamedInput;
