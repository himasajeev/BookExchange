import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BounceLoader from 'react-spinners/BounceLoader';
import { COLORS } from '../../styles/globalVariables';

const Wrapper = styled.div`
  ${props => props.isRelative && 'position: relative;'}
`;

const SpinnerWrapper = styled.div`
  position: absolute;
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

const Loading = ({ isLoading, children, isRelative }) => {
  return (
    <Wrapper isRelative={isRelative}>
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
  isRelative: PropTypes.bool,
};

export default Loading;
