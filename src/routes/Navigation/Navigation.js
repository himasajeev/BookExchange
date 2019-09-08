import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MdShoppingCart } from 'react-icons/md';
import Link from '../../components/Link/Link';
import { FONT_SIZE, FONT_COLORS, BACKGROUND_COLORS } from '../../styles/global';
import { fetchLogoutUser } from '../../modules/user/userApi';

const StyledNavigation = styled.nav`
  width: 100%;
  position: sticky;
  height: 50px;
`;

const BasketContainer = styled.div`
  position: relative;
  width: 30px;
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
  font-size: ${FONT_SIZE.LARGE};
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
      <Link to="/" exact>
        Store
      </Link>
      <Link to="/add">Add</Link>
      <Link to="/overview">Overview</Link>

      {token && (
        <button type="button" onClick={handleLogoutUser}>
          Logout
        </button>
      )}
      <Link to="/basket">
        <BasketContainer>
          <BasketCount>{basketCount}</BasketCount>

          <BasketIcon />
        </BasketContainer>
      </Link>
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
