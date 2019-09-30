import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { isBuy, isSell } from '../../../utils/phaseToBool';
import { INSTRUCTIONS } from '../../../constants/Instructions';
import { FONT_SIZE } from '../../../styles/globalVariables';
import { PADDING } from '../../../styles/padding';

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  display: flex;
  flex-direction: column;
`;

const StyledNotice = styled.h1`
  font-weight: bold;
  margin-top: ${PADDING.BASE};
  text-align: center;
  font-size: ${FONT_SIZE.LARGE};
`;

const getInstructions = phase => {
  if (isBuy(phase)) return INSTRUCTIONS.BUY;
  if (isSell(phase)) return INSTRUCTIONS.SELL;
  return '';
};

const Instructions = ({ phase }) => {
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Instrukcje</Typography>
      </ExpansionPanelSummary>
      <StyledExpansionPanelDetails>
        <Typography>{getInstructions(phase)}</Typography>
        {phase && <StyledNotice>KOSZYK NALEŻY ZATWIERDZIĆ</StyledNotice>}
      </StyledExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Instructions.propTypes = {
  phase: PropTypes.number,
};

export default Instructions;
