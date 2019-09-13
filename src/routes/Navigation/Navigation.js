import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MdShoppingCart } from 'react-icons/md';
import Link from '../../components/Link/Link';
import { FONT_COLORS, BACKGROUND_COLORS } from '../../styles/globalVariables';
import { PADDING } from '../../styles/padding';

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

const StyledLink = styled(Link, {
  shouldforwardprop: prop => prop !== 'as',
})`
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 ${PADDING.SMALL};
`;

const BasketCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: ${FONT_COLORS.LIGHT};
  background: ${BACKGROUND_COLORS.DARK};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 20px;
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

const Navigation = ({ basketCount, token, logoutUser }) => {
  const handleLogoutUser = React.useCallback(() => {
    logoutUser(token);
  }, [logoutUser, token]);

  return (
    <StyledNavigation>
      <StyledWrapper>
        <StyledLink to="/" exact>
          Sklep
        </StyledLink>
        <StyledLink to="/add">Dodaj</StyledLink>
        <StyledLink to="/overview">Konto</StyledLink>
        <StyledLink to="/basket">
          <BasketContainer>
            <BasketCount>{basketCount}</BasketCount>

            <BasketIcon />
          </BasketContainer>
        </StyledLink>
        {token && (
          <StyledLink type="button" onClick={handleLogoutUser}>
            Wyloguj
          </StyledLink>
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
