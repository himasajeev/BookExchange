import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledInput = styled.input``;

const Input = ({ value, name, onChange, type }) => {
  return (
    <StyledInput name={name} type={type} value={value} onChange={onChange} />
  );
};

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

  type: PropTypes.string.isRequired,
};

export default Input;
