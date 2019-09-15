import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MdShoppingCart } from 'react-icons/md';
import Link from '../../components/Link/Link';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';
import Button from '../../components/Button/Button';

const StyledNavigation = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  height: 50px;
  background: #b0bec5;
  z-index: 1000;
`;

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const BasketContainer = styled.div`
  position: relative;
  width: 30px;
`;

const BasketCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background: #000;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const BasketIcon = styled(MdShoppingCart)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)`
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 ${PADDING.SMALL};
  position: relative;
  background: ${COLORS.NAVBAR_MAIN};
  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    border-bottom: solid 3px ${COLORS.NAVBAR_BORDER};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

const Navigation = ({ basketCount, token, logoutUser }) => {
  const handleLogoutUser = React.useCallback(() => {
    logoutUser(token);
  }, [logoutUser, token]);

  return (
    <StyledNavigation>
      <StyledWrapper>
        <Link to="/" exact>
          Sklep
        </Link>
        <Link to="/add">Dodaj</Link>
        <Link to="/overview">Konto</Link>
        <Link to="/basket">
          <BasketContainer>
            <BasketCount>{basketCount}</BasketCount>

            <BasketIcon />
          </BasketContainer>
        </Link>
        {token && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <StyledButton as="button" type="button" onClick={handleLogoutUser}>
            Wyloguj
          </StyledButton>
        )}
      </StyledWrapper>
    </StyledNavigation>
  );
};

Navigation.defaultProps = {
  token: '',
};

Navigation.propTypes = {
  basketCount: PropTypes.number.isRequired,
  token: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};
export default Navigation;
