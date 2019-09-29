import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { StyledButton } from './BookStyled';

const BookButtonStore = ({
  onButtonClick,
  book,
  isSelected,
  children,
  isFloatingRight,
  isUnavailable,
  phase,
  token,
}) => {
  const onClick = React.useCallback(() => {
    onButtonClick(book, token, phase);
  }, [book, onButtonClick, phase, token]);

  const displayError = () => {
    toast.error('Wybierz stan książki!');
  };

  if (isUnavailable) return null;

  if (isSelected)
    return (
      <StyledButton
        onClick={onClick}
        isFloatingRight={isFloatingRight}
        data-testid="add_to_basket"
      >
        {children}
      </StyledButton>
    );

  return (
    <StyledButton
      isFloatingRight={isFloatingRight}
      data-testid="add_to_basket"
      onClick={displayError}
    >
      {children}
    </StyledButton>
  );
};

BookButtonStore.propTypes = {
  book: PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
    .isRequired,
  onButtonClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  isFloatingRight: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  phase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  token: PropTypes.string,
};

export default BookButtonStore;
