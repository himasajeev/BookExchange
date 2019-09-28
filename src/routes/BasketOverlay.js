import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { throttle } from 'lodash';
import { PADDING } from '../styles/padding';

const StyledBadge = styled(Badge)`
  padding: 0 4px;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
`;

const StyledFab = styled(Fab)`
  position: absolute;
  bottom: ${PADDING.BASE};
  right: ${PADDING.BASE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
`;

const StyledScrollFab = styled(Fab)`
  position: absolute;
  bottom: ${PADDING.BASE};
  left: ${PADDING.BASE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
`;

const THROTTLE_TIMER = 500;

function BasketOverlay({ history, basketCount, payAmount }) {
  const [showScrollUp, setShowScrollUp] = React.useState(false);

  const handleScrolling = () => {
    const isScrolled = window.innerHeight / 2 < window.pageYOffset;
    if (isScrolled) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener(
      'scroll',
      throttle(handleScrolling, THROTTLE_TIMER),
    );
    return () => {
      document.removeEventListener('scroll', handleScrolling);
    };
  });

  const redirectToBasket = () => {
    history.push('/basket');
    setShowScrollUp(false);
  };
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const basketFab = (
    <StyledBadge badgeContent={basketCount} color="primary">
      <ShoppingCartIcon />
    </StyledBadge>
  );

  return (
    <StyledOverlay>
      <Zoom in={!!basketCount}>
        <StyledFab color="secondary" onClick={redirectToBasket}>
          {payAmount ? (
            <StyledBadge
              color="primary"
              max={999}
              badgeContent={payAmount}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              {basketFab}
            </StyledBadge>
          ) : (
            basketFab
          )}
        </StyledFab>
      </Zoom>
      <Zoom in={showScrollUp}>
        <StyledScrollFab color="secondary" onClick={scrollTop}>
          <KeyboardArrowUpIcon />
        </StyledScrollFab>
      </Zoom>
    </StyledOverlay>
  );
}

BasketOverlay.propTypes = {
  history: ReactRouterPropTypes.history,
  basketCount: PropTypes.number,
  payAmount: PropTypes.number,
};

export default withRouter(BasketOverlay);
