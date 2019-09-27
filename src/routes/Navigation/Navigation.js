import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavLink from '../../components/NavLink/NavLink';
import { PADDING } from '../../styles/padding';
import {
  COLORS,
  NAVBAR_HEIGHT,
  SCREEN_SIZES,
} from '../../styles/globalVariables';
import Button from '../../components/Button/Button';

const StyledNavigation = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${COLORS.MAIN};
  z-index: 1000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  min-height: ${NAVBAR_HEIGHT.DESKTOP};
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE}) {
    min-height: ${NAVBAR_HEIGHT.MOBILE};
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  width: 90%;
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE}) {
    margin: auto;
    ${props =>
      props.isMenuOpen
        ? `
      height: 192px;
      flex-direction: column;
      background: ${COLORS.MAIN};
        `
        : `
      flex-direction: column;
      height:0;
      background: ${COLORS.MAIN};
    `};
  }
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

const StyledMenuItem = styled(MenuItem)`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

const StyledContainer = styled.div`
  min-height: ${NAVBAR_HEIGHT.MOBILE};
  display: inline-flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 ${PADDING.SMALL};
  position: relative;
  background: inherit;
  height: auto;
  display: flex;

  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE}) {
    padding: ${PADDING.X_SMALL} 0;
    margin: ${PADDING.SMALL} 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    border-bottom: solid 3px ${COLORS.NAVBAR_BORDER};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    @media only screen and (max-width: ${SCREEN_SIZES.MOBILE}) {
      width: calc(50% - ${PADDING.SMALL});
    }
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
  margin-left: auto;
  margin-right: ${PADDING.BASE};

  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE}) {
    margin-left: 0;
  }
`;

const Navigation = ({ token, logoutUser }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <ClickAwayListener onClickAway={handleHideMenu}>
      <StyledNavigation isMenuOpen={isMenuOpen}>
        <StyledContainer>
          <StyledMenuItem onClick={handleMenuOpen}>
            <StyledHamburger />
          </StyledMenuItem>
          <StyledTitle to="/">Giełda WPiAUJ</StyledTitle>
        </StyledContainer>
        <StyledWrapper isMenuOpen={isMenuOpen}>
          <NavLink to="/" exact handleHideMenu={handleHideMenu}>
            Sklep
          </NavLink>
          <NavLink to="/add" handleHideMenu={handleHideMenu}>
            Dodaj
          </NavLink>
          <NavLink to="/overview" handleHideMenu={handleHideMenu}>
            Konto
          </NavLink>
          <NavLink to="/basket" handleHideMenu={handleHideMenu}>
            Koszyk
          </NavLink>
          {token && (
            <StyledButton
              as="button"
              type="button"
              onClick={handleLogoutUser}
              data-testid="logout-button"
            >
              Wyloguj
            </StyledButton>
          )}
        </StyledWrapper>
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
};
export default Navigation;
