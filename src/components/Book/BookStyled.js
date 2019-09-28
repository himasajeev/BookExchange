import styled from '@emotion/styled';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Select from '../Select/Select';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';

export const StyledButton = styled(Button)`
  margin: ${props =>
    props.isFloatingRight
      ? `${PADDING.BASE} 16px ${PADDING.BASE} auto`
      : ` 0  0 ${PADDING.BASE} 0`};

  background: ${COLORS.MAIN};
  color: #fff;
  font-size: 16px;
  align-self: flex-end;

  &:hover,
  &:active {
    background: ${COLORS.MAIN_SECONDARY};
  }
`;

export const StyledCard = styled(Card)`
  max-width: 400px;
  display: inline-block;
  margin: ${PADDING.BASE} auto ${PADDING.BASE} auto;
  text-align: left;
  width: 100%;
  overflow: visible;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin: ${PADDING.LARGE} ${PADDING.BASE} ${PADDING.BASE} 0;
  align-self: flex-start;
`;

export const StyledTopography = styled(Typography)`
  padding-top: ${props => props.isFirst && PADDING.SMALL};
  margin: ${PADDING.X_SMALL};
`;

export const StyledCardActions = styled(CardActions)`
  padding: 0 16px ${PADDING.BASE};
  display: flex;
  align-items: center;
`;

export const StyledUnavailable = styled.span`
  flex: 1;
  align-self: center;
  padding: ${PADDING.BASE} 0;
  color: ${COLORS.ERROR};
`;

export const StyledSelectedState = styled(StyledUnavailable)`
  color: #000;
  padding-left: 14px;
  font-size: 16px;
`;

export const StyledCardContent = styled(CardContent)`
  padding-bottom: 0;
`;
