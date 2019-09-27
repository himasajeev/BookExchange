import styled from '@emotion/styled';

import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { PADDING } from '../../styles/padding';
import {
  BUTTON_GRADIENT,
  COLORS,
  FONT_COLORS,
} from '../../styles/globalVariables';

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledWrapper = styled(Paper)`
  width: calc(80% - ${PADDING.X_LARGE});
  max-width: 400px;
  padding: ${PADDING.BASE_LARGER};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: ${FONT_COLORS.DARK};
`;

export const StyledButton = styled(Button)`
  margin-top: ${PADDING.X_LARGE};
  background: ${BUTTON_GRADIENT};
  color: #fff;
  font-size: 16px;
`;

export const StyledTitle = styled(Typography)`
  margin: 0 auto;
  font-size: 24px;
`;

export const StyledLoginLink = styled(Link)`
  align-self: flex-end;
  color: ${COLORS.MAIN};
  text-decoration: none;
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
