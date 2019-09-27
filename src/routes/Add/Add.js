import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { omit } from 'lodash';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import { ADD_INPUTS, RESPONSES } from './constants';
import NamedInput from '../../components/NamedInput/NamedInput';
// import Button from '../../components/Button/Button';
import { fetchAddBook } from '../../modules/add/addApi';
import Select from '../../components/Select/Select';
import { PADDING } from '../../styles/padding';
import { COLORS, FONT_SIZE } from '../../styles/globalVariables';
import { successMessage } from '../../constants/successMessage';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${PADDING.BASE} auto;
`;

// const StyledButton = styled(Button)`
//   padding: ${PADDING.BASE};
//   background: ${COLORS.NAVBAR_MAIN};
//   &:hover,
//   &:focus {
//     background: ${COLORS.NAVBAR_SECONDARY};
//   }
// `;

const StyledResponse = styled.span`
  color: ${props => (props.isSuccess ? COLORS.SUCCESS : COLORS.ERROR)};
  font-size: ${FONT_SIZE.LARGE};
`;

const numberOfInputFields = 5;

const Add = ({ token, categories }) => {
  const [addValue, setAddValue] = React.useState({});

  const [status, setStatus] = React.useState({ text: '', isSuccess: false });

  const onAdd = async () => {
    if (Object.values(addValue).length === numberOfInputFields) {
      setAddValue({ categories: addValue.categories });
      const response = await fetchAddBook(token, { ...addValue });
      if (response.result === successMessage) {
        setStatus(RESPONSES.SUCCESS);
        toast.success(RESPONSES.SUCCESS.text);
      } else {
        setStatus(RESPONSES.SERVER_ERROR);
        toast.error(RESPONSES.SERVER_ERROR.text);
      }
    } else {
      setStatus(RESPONSES.ERROR);
      toast.error(RESPONSES.ERROR.text);
    }
  };

  const handleAddChange = event => {
    setAddValue({ ...addValue, [event.target.name]: event.target.value });
  };

  const handleSearchChange = (selected, element) => {
    const { name, action } = element;
    console.log(name, selected);
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
      />

      <Button variant="contained" onClick={onAdd}>
        Dodaj ksiażkę
      </Button>
      <StyledResponse
        data-testid={status.isSuccess ? 'add_success' : 'add_error'}
        isSuccess={status.isSuccess}
      >
        {status.text}
      </StyledResponse>
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
};

export default Add;
