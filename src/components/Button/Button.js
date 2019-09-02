import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  height: 20px;
  vertical-align: middle;
  padding: 5px 10px;
  font-size: 10px;
  border-radius: 5px;
`;

const Button = ({ children, onClick, isBuy }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
  isBuy: false,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  isBuy: PropTypes.bool,
};
export default Button;
