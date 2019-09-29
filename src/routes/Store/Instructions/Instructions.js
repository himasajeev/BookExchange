import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { isBuy, isSell } from '../../../utils/phaseToBool';
import { INSTRUCTIONS } from '../../../constants/Instructions';

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
      <ExpansionPanelDetails>
        <Typography>{getInstructions(phase)}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Instructions.propTypes = {
  phase: PropTypes.number,
};

export default Instructions;
