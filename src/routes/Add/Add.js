import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ADD_INPUTS } from './constants';
import NamedInput from '../../components/NamedInput/NamedInput';
import Button from '../../components/Button/Button';
import { fetchAddBook } from '../../modules/add/addApi';
import Select from '../../components/Select/Select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

const Add = ({ token, categories }) => {
  const [addValue, setAddValue] = React.useState({});
  const [status, setStatus] = React.useState();

  const onAdd = async () => {
    const response = await fetchAddBook(token, { ...addValue });
    setStatus(response.result);
  };

  const handleAddChange = event => {
    setAddValue({ ...addValue, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      {ADD_INPUTS.map(input => (
        <NamedInput
          key={input.name}
          name={input.name}
          title={input.title}
          type={input.type}
          onChange={handleAddChange}
          value={addValue[input.name]}
        />
      ))}
      <Select
        name="categories"
        defaultValue="Wybierz Kategorie"
        onChange={handleAddChange}
        value={addValue.categories}
        options={categories}
        title="Kategoria"
      />

      <Button onClick={onAdd}>Dodaj ksiażke</Button>
      <span>{status}</span>
    </Wrapper>
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
