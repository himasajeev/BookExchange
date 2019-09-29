import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import BookIcon from '@material-ui/icons/Book';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledSection, StyledSectionTitleNoPadding } from './OverviewStyled';
import { STATUS_TRANSLATIONS } from '../../constants/statusTranslations';

const OrderHistory = ({ bookData, title }) => {
  if (!bookData.length) return null;
  return (
    <StyledSection data-testid="books_to_buy">
      <StyledSectionTitleNoPadding>{title}</StyledSectionTitleNoPadding>
      <List>
        {bookData.map(book => (
          <ListItem key={book.protId}>
            <ListItemIcon>
              <Avatar>
                <BookIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={book.title}
              secondary={STATUS_TRANSLATIONS[book.state]}
            />
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

OrderHistory.defaultProps = {
  bookData: [],
};

OrderHistory.propTypes = {
  title: PropTypes.string,
  bookData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      state: PropTypes.string,
    }),
  ),
};

export default OrderHistory;
