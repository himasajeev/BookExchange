import React from 'react';
import styled from '@emotion/styled';
import Link from '../../components/Link/Link';

const StyledNavigation = styled.nav`
  width: 100%;
  position: sticky;
  height: 100px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/" exact>
        Store
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/add">Add</Link>
    </StyledNavigation>
  );
};

export default Navigation;
