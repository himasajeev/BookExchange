import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import { throttle } from 'lodash';
import NavLink, { StyledNavLink } from '../../components/NavLink/NavLink';
import { PADDING } from '../../styles/padding';
import {
  COLORS,
  mobileWidth,
  NAVBAR_HEIGHT,
} from '../../styles/globalVariables';
import { isSell } from '../../utils/phaseToBool';

const StyledNavigation = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${COLORS.MAIN};
  z-index: 1000;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  min-height: ${NAVBAR_HEIGHT.DESKTOP};
  display: flex;
  flex-direction: row;
  ${props =>
    props.isViewportMobile &&
    `
    min-height: ${NAVBAR_HEIGHT.MOBILE};
    flex-direction: column;
  `}
`;

const StyledWrapper = styled.div`
  width: 90%;
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: ${NAVBAR_HEIGHT.DESKTOP};

  ${props =>
    props.isViewportMobile &&
    `
    margin: auto;
    flex-direction: column;
    background: ${COLORS.MAIN};
    padding-bottom: ${PADDING.BASE};
    `}
`;

const StyledTitle = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  color: #fff;
  padding: 0 ${PADDING.BASE_LARGER};
  user-select: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledHamburger = styled(MenuIcon)`
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  min-height: ${NAVBAR_HEIGHT.MOBILE};
  display: inline-flex;
  flex-direction: row;
`;

const StyledButton = styled(StyledNavLink)`
  margin-left: auto;
  margin-right: ${PADDING.BASE};
  outline: none;
  ${props =>
    props.isViewportMobile &&
    `
    padding: ${PADDING.SMALL} 0;
    margin: ${PADDING.X_SMALL} 0;
    `}
`;

const StyledAnimateHeight = styled(AnimateHeight)`
  width: 100%;
`;

const animationDuration = 500;
const throttleTimer = 300;

const Navigation = ({ token, logoutUser, phase }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isViewportMobile, setIsViewportMobile] = React.useState(true);

  const onResize = () => {
    if (window.innerWidth <= mobileWidth) setIsViewportMobile(true);
    else setIsViewportMobile(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', throttle(onResize, throttleTimer));
    onResize();
    return () =>
      window.removeEventListener('resize', throttle(onResize, throttleTimer));
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHideMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoutUser = React.useCallback(() => {
    logoutUser(token);
    handleHideMenu();
  }, [logoutUser, token]);

  const navbarContent = (
    <StyledWrapper isViewportMobile={isViewportMobile}>
      <NavLink
        to="/"
        exact
        isViewportMobile={isViewportMobile}
        handleHideMenu={handleHideMenu}
      >
        Sklep
      </NavLink>
      {isSell(phase) && (
        <NavLink
          to="/add"
          isViewportMobile={isViewportMobile}
          handleHideMenu={handleHideMenu}
        >
          Dodaj
        </NavLink>
      )}
      <NavLink
        to="/overview"
        isViewportMobile={isViewportMobile}
        handleHideMenu={handleHideMenu}
      >
        Konto
      </NavLink>
      <NavLink
        to="/basket"
        isViewportMobile={isViewportMobile}
        handleHideMenu={handleHideMenu}
      >
        Koszyk
      </NavLink>
      {token && (
        <StyledButton
          as="button"
          type="button"
          onClick={handleLogoutUser}
          data-testid="logout-button"
          isViewportMobile={isViewportMobile}
        >
          Wyloguj
        </StyledButton>
      )}
    </StyledWrapper>
  );

  const height = isMenuOpen ? 'auto' : 0;
  return (
    <ClickAwayListener onClickAway={handleHideMenu}>
      <StyledNavigation
        isMenuOpen={isMenuOpen}
        isViewportMobile={isViewportMobile}
      >
        <StyledContainer>
          {isViewportMobile && (
            <MenuItem onClick={handleMenuOpen}>
              <StyledHamburger />
            </MenuItem>
          )}
          <StyledTitle to="/">Giełda WPiAUJ</StyledTitle>
        </StyledContainer>
        {isViewportMobile ? (
          <StyledAnimateHeight height={height} duration={animationDuration}>
            {navbarContent}
          </StyledAnimateHeight>
        ) : (
          navbarContent
        )}
      </StyledNavigation>
    </ClickAwayListener>
  );
};

Navigation.defaultProps = {
  token: '',
};

Navigation.propTypes = {
  token: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
  phase: PropTypes.number,
};
export default Navigation;
