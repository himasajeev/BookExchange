import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  font-size: 10px;
  border-radius: 5px;
`;

const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton type="button" className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
  className: '',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
