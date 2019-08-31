import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.isActive ? 'palevioletred' : 'lightblue')};
`;

const Link = ({ to, children, exact, history, location }) => {
  const onClick = () => {
    history.push(to);
  };

  const isActive = location.pathname === to;

  return (
    <StyledLink onClick={onClick} exact={exact} isActive={isActive}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  exact: false,
};

Link.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Link);
