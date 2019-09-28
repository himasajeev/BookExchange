import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  border: 0;
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }
`;

const Button = ({ children, onClick, className, testId }) => {
  return (
    <StyledButton
      type="button"
      className={className}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
  className: '',
  testId: '',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  testId: PropTypes.string,
};
export default Button;
