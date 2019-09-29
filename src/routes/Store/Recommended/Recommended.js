import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BOOK_POSITION } from '../../../constants/bookPosition';
import Book from '../../../components/Book/Book';
import { COLORS } from '../../../styles/globalVariables';
import Loading from '../../../components/Loading/Loading';

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  background: ${COLORS.BACKGROUND};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Recommended = ({
  token,
  phase,
  addToBasket,
  recommendedBooks,
  getRecommended,
  basketCount,
  isLoading,
}) => {
  React.useEffect(() => {
    getRecommended(token, phase);
  }, [getRecommended, phase, token, basketCount]);

  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleIsExpandedChange = () => {
    setIsExpanded(!isExpanded);
  };

  const expanded = isExpanded && recommendedBooks.length > 0;
  return (
    <ExpansionPanel defaultExpanded expanded={expanded}>
      <ExpansionPanelSummary
        onClick={handleIsExpandedChange}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Polecane książki</Typography>
      </ExpansionPanelSummary>
      <Loading isLoading={isLoading} isRelative>
        <StyledExpansionPanelDetails>
          {recommendedBooks.map((book, i) => (
            <Book
              /* eslint react/no-array-index-key:0 */
              key={book.id + i}
              book={book}
              onButtonClick={addToBasket}
              type={BOOK_POSITION.STORE}
              phase={phase}
              token={token}
            />
          ))}
        </StyledExpansionPanelDetails>
      </Loading>
    </ExpansionPanel>
  );
};

Recommended.defaultProps = {
  recommendedBooks: [],
};

Recommended.propTypes = {
  addToBasket: PropTypes.func,
  phase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  recommendedBooks: PropTypes.arrayOf(PropTypes.shape({})),
  token: PropTypes.string,
  getRecommended: PropTypes.func,
  basketCount: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default Recommended;
