import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BounceLoader from 'react-spinners/BounceLoader';
import { COLORS } from '../../styles/globalVariables';

const Wrapper = styled.div`
  //position: relative;
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  z-index: 100;
`;

const Loading = ({ isLoading, children }) => {
  return (
    <Wrapper>
      {isLoading && (
        <SpinnerWrapper>
          <BounceLoader
            loading={isLoading}
            color={COLORS.LOADER_COLOR}
            sizeUnit="px"
            size={150}
          />
        </SpinnerWrapper>
      )}
      {children}
    </Wrapper>
  );
};

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Loading;
