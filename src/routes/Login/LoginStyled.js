import styled from '@emotion/styled';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import { PADDING } from '../../styles/padding';
import { COLORS, FONT_COLORS, LOGIN_IMAGE } from '../../styles/globalVariables';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${LOGIN_IMAGE}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 450px;
  padding: ${PADDING.LARGE};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    ${COLORS.LOGIN_MAIN},
    ${COLORS.LOGIN_MAIN_VARIANT} 100%
  );
  color: ${FONT_COLORS.LIGHT};
  border-radius: 15px;
`;

export const StyledButton = styled(Button)`
  margin-top: ${PADDING.BASE};
  padding: ${PADDING.BASE};
  background: ${COLORS.LOGIN_SECONDARY};
  color: ${FONT_COLORS.LIGHT};
  border-radius: 8px;
  font-size: 20px;

  &:hover,
  &:focus {
    background: ${COLORS.LOGIN_SECONDARY_VARIANT};
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
  color: ${FONT_COLORS.LIGHT};
  // margin-left: ${PADDING.SMALL};margin-left: ${PADDING.SMALL};
`;

export const StyledTitle = styled.span`
  margin: 0 auto;
  font-size: 24px;
`;

export const StyledError = styled.span`
  display: block;
  color: ${COLORS.ERROR};
  height: ${PADDING.BASE};
  margin-bottom: ${PADDING.SMALL};
`;
