import styled from '@emotion/styled';

import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { PADDING } from '../../styles/padding';
import {
  BUTTON_GRADIENT,
  COLORS,
  FONT_COLORS,
} from '../../styles/globalVariables';

export const StyledBackground = styled.div`
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
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
  margin-top: ${PADDING.BASE};
  background: ${BUTTON_GRADIENT};
  color: #fff;
  font-size: 16px;
`;

export const StyledTitle = styled(Typography)`
  margin: 0 auto;
  font-size: 24px;
`;

export const StyledSiteTitle = styled(StyledTitle)`
  margin: 0 auto ${PADDING.BASE_LARGER};
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

export const StyledRegLink = styled.a`
  color: ${COLORS.MAIN};
  text-decoration: none;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-top: ${PADDING.SMALL};
`;

export const StyledUjImage = styled.img`
  display: block;
  margin: ${PADDING.BASE} auto;
  max-width: 200px;
  max-height: 180px;
`;

export const StyledElsa = styled.img`
  display: block;
  margin: ${PADDING.BASE} auto;
  max-width: 260px;
  max-height: 140px;
`;
