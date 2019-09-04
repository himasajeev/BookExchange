import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
`;

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1.5s infinite linear;
  min-height: 30px;
  width: 25%;
  height: 25%;
`;

const Loading = ({ isLoading, children }) => {
  return (
    <Wrapper>
      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
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
  children: PropTypes.element.isRequired,
};

export default Loading;
