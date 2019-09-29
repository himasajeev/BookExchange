import styled from '@emotion/styled';
import Paper from '@material-ui/core/Paper';

import { PADDING } from '../../styles/padding';
import { MAX_WIDTH } from '../../styles/globalVariables';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${PADDING.BASE_LARGER} auto;
`;

export const StyledPaper = styled(Paper)`
  padding: ${PADDING.LARGE};
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  & span {
    display: block;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: ${PADDING.LARGE};
`;

export const StyledSection = styled.section`
  margin: ${PADDING.LARGE} 0;
`;

export const StyledSectionTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: ${PADDING.BASE};
`;

export const StyledSectionTitleNoPadding = styled(StyledSectionTitle)`
  margin: 0;
`;

export const StyledPaymentContainer = styled.div`
  margin-bottom: ${PADDING.BASE};
`;
