import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Input from '../Input/Input';

const StyledSpan = styled.span`
  padding-top: 10px;
`;

const NamedInput = ({ value, name, onChange, title, type }) => {
  return (
    <React.Fragment>
      <StyledSpan>{title}</StyledSpan>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </React.Fragment>
  );
};
NamedInput.defaultProps = {
  value: '',
};

NamedInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NamedInput;
