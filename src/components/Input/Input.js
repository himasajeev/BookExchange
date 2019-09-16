import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { PADDING } from '../../styles/padding';

const StyledInput = styled.input`
  margin: ${PADDING.SMALL} 0;

  font-size: 20px;
  padding: ${PADDING.SMALL} ${PADDING.X_LARGE} ${PADDING.SMALL} ${PADDING.SMALL};
  border: 1px black solid;

  &:focus {
    outline: none;
  }
`;

const Input = ({ value, name, onChange, type, className, placeholder }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  value: '',
  className: '',
  placeholder: '',
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
