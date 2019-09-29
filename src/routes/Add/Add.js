import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { omit } from 'lodash';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import Paper from '@material-ui/core/Paper';
import { ADD_INPUTS, RESPONSES } from './constants';
import NamedInput from '../../components/NamedInput/NamedInput';
import { fetchAddBook } from '../../modules/add/addApi';
import Select from '../../components/Select/Select';
import { PADDING } from '../../styles/padding';
import { COLORS, MAX_WIDTH } from '../../styles/globalVariables';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import { isFormValid } from '../../utils/validateForm';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${PADDING.BASE_LARGER} auto;
  max-width: ${MAX_WIDTH};
`;

const StyledPaper = styled(Paper)`
  padding: ${PADDING.LARGE};
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  align-self: center;
  font-size: 16px;
  color: #fff;
  background: ${COLORS.MAIN};
  margin-top: ${PADDING.BASE};
  &:hover,
  &:active {
    background: ${COLORS.MAIN_SECONDARY};
  }
`;

const numberOfInputFields = 5;

const Add = ({ token, categories, addToBasket }) => {
  const [addValue, setAddValue] = React.useState({});

  const onAdd = async () => {
    if (isFormValid(addValue, numberOfInputFields)) {
      setAddValue({ categories: addValue.categories });
      try {
        const response = await fetchAddBook(token, { ...addValue });
        const [responseBook] = response.result;

        if (isResponseWithArrayValid(response.result)) {
          addToBasket(responseBook, token);
        } else {
          toast.error(RESPONSES.SERVER_ERROR.text);
        }
      } catch (error) {
        toast.error(RESPONSES.SERVER_ERROR.text);
      }
    } else {
      toast.error(RESPONSES.ERROR.text);
    }
  };

  const handleAddChange = event => {
    setAddValue({ ...addValue, [event.target.name]: event.target.value });
  };

  const handleSearchChange = (selected, element) => {
    const { name, action } = element;
    switch (action) {
      case 'select-option':
        setAddValue({ ...addValue, [name]: selected.value });
        break;
      case 'clear':
        setAddValue({ ...omit(addValue, [name]) });
        break;
      default:
        break;
    }
  };

  return (
    <StyledWrapper>
      <StyledPaper>
        {ADD_INPUTS.map(input => (
          <NamedInput
            key={input.name}
            name={input.name}
            label={input.label}
            onChange={handleAddChange}
            value={addValue[input.name]}
          />
        ))}
        <Select
          name="categories"
          placeholder="Wybierz przedmiot"
          onChange={handleSearchChange}
          value={addValue.categories}
          options={categories}
          id="add-select"
          label="Przedmiot"
          isClearable
        />
        <StyledButton variant="contained" onClick={onAdd}>
          Dodaj ksiażkę
        </StyledButton>
      </StyledPaper>
    </StyledWrapper>
  );
};

Add.defaultProps = {
  categories: [],
  token: '',
};

Add.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  token: PropTypes.string,
  addToBasket: PropTypes.func,
};

export default Add;
