import styled from '@emotion/styled';

import { MdArrowDropDown } from 'react-icons/md';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { PADDING } from '../../styles/padding';
import { COLORS } from '../../styles/globalVariables';
// import Button from '../Button/Button';

export const StyledSelect = styled(Select)`
  margin-top: auto;
  margin-bottom: ${PADDING.SMALL};
`;

export const StyledSelectedState = styled.span`
  margin-top: auto;
  margin-bottom: ${PADDING.SMALL};
`;

export const StyledUnavailable = styled.span`
  margin-top: auto;
  margin-bottom: ${PADDING.SMALL};
  color: ${COLORS.ERROR};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${PADDING.SMALL};
  width: 100%;
  max-width: 400px;
  margin: ${PADDING.BASE} auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

export const StyledDescription = styled.div`
  margin-left: ${PADDING.BASE};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 20px;
`;

export const StyledAuthor = styled.h2`
  font-size: 16px;
  margin: ${PADDING.SMALL} 0;
`;

export const StyledBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCollapsedMenu = styled.div`
  height: ${props => (props.isCollapsed ? '0' : '60px')};
  overflow: hidden;
  padding-top: ${props => (props.isCollapsed ? '0' : PADDING.SMALL)};
  transition: height 0.15s ease-out;
  & > span {
    display: block;
    text-align: center;
  }
`;

export const StyledIcon = styled(MdArrowDropDown)`
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTopContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
  background: ${COLORS.MAIN};
  color: #fff;
  font-size: 16px;
  &:hover {
    background: #69a2ff;
  }
`;
