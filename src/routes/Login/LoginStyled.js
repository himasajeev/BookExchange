import styled from '@emotion/styled';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import { PADDING } from '../../styles/padding';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url('/images/login-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 450px;
  padding: ${PADDING.LARGE};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: linear-gradient(to bottom, #fb8c00dd, #ff9800dd 100%);
  color: #fff;
  border-radius: 15px;
`;

export const StyledButton = styled(Button)`
  margin-top: ${PADDING.BASE};
  padding: ${PADDING.BASE};
  background: #3d5afe;
  color: #fff;
  border-radius: 8px;
  font-size: 20px;

  &:hover,
  &:focus {
    background: #536dfe;
  }
`;

export const StyledInput = styled(Input)`
  height: ${PADDING.LARGE};
  margin: ${PADDING.BASE} 0;
  border-radius: 8px;
  font-size: 20px;
  padding: ${PADDING.SMALL};
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #fff;
  margin-left: ${PADDING.SMALL};
`;

export const StyledTitle = styled.span`
  margin: 0 auto;
  font-size: 24px;
`;

export const StyledError = styled.span`
  display: block;
  color: #b00020;
  height: ${PADDING.BASE};
  margin-bottom: ${PADDING.SMALL};
`;
