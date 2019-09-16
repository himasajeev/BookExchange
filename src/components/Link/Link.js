import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledNavLink = styled(StyledLink)`
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 ${PADDING.SMALL};
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    border-bottom: solid 3px ${COLORS.NAVBAR_BORDER};
    transform: scaleX(0);
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
  background: ${props =>
    props.isActive ? COLORS.NAVBAR_SECONDARY : COLORS.NAVBAR_MAIN};
`;

const Link = ({
  to,
  as,
  children,
  exact,
  history,
  location,
  className,
  isNavbar,
}) => {
  const onClick = () => {
    history.push(to);
  };

  const isActive = location.pathname === to;

  return isNavbar ? (
    <StyledNavLink
      onClick={onClick}
      exact={exact}
      isActive={isActive}
      className={className}
      as={as}
    >
      {children}
    </StyledNavLink>
  ) : (
    <StyledLink
      onClick={onClick}
      exact={exact}
      isActive={isActive}
      className={className}
    >
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  exact: false,
  className: '',
  as: '',
  isNavbar: true,
};

Link.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
  isNavbar: PropTypes.bool,
};

export default withRouter(Link);
