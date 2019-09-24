import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { COLORS } from '../styles/globalVariables';
import { BasketIcon } from './Navigation/Navigation';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;
const StyledBasket = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20vmin;
  height: 20vmin;
  border-radius: 50%;
  background-color: ${COLORS.OVERLAY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
`;

function BasketOverlay({ history }) {
  const redirectToBasket = () => {
    history.push('/basket');
  };
  return (
    <StyledOverlay>
      <StyledBasket onClick={redirectToBasket}>
        <BasketIcon />
      </StyledBasket>
    </StyledOverlay>
  );
}

BasketOverlay.propTypes = {
  history: ReactRouterPropTypes.history,
};

export default withRouter(BasketOverlay);
