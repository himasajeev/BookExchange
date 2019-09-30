import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';

export const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${PADDING.BASE_LARGER};
  color: #fff;
  background: ${COLORS.MAIN};
  position: relative;
  min-height: 20px;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    border-bottom: solid 3px ${COLORS.NAVBAR_BORDER};
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 250ms ease-in-out;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
  }

  &:hover {
    cursor: pointer;
    color: #fff;

    &::after {
      transform: scaleX(1);
    }
  }

  ${props =>
    props.isViewportMobile &&
    `
    padding: ${PADDING.SMALL} 0;
    margin: ${PADDING.X_SMALL} 0;
    
    &::after {
      width: calc(50% - ${PADDING.SMALL});
      margin: 0 auto;
      align-items: unset;
    }
    `}
`;

const NavLink = ({
  to,
  children,
  exact,
  history,
  location,
  className,
  handleHideMenu,
  isViewportMobile,
}) => {
  const onClick = () => {
    history.push(to);
    handleHideMenu();
  };

  const isActive = location.pathname === to;

  return (
    <StyledNavLink
      onClick={onClick}
      exact={exact}
      isActive={isActive}
      className={className}
      isViewportMobile={isViewportMobile}
    >
      {children}
    </StyledNavLink>
  );
};

NavLink.defaultProps = {
  exact: false,
  className: '',
};

NavLink.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  className: PropTypes.string,
  handleHideMenu: PropTypes.func.isRequired,
  isViewportMobile: PropTypes.bool,
};

export default withRouter(NavLink);
