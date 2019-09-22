import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { REGISTER_INPUTS } from './constants';

import {
  Background,
  Wrapper,
  StyledButton,
  StyledInput,
  StyledLink,
  StyledTitle,
  StyledError,
} from '../Login/LoginStyled';

const numberOfInputFields = 5;

const Register = ({ registerUser, registerError, token, history }) => {
  const [registerValue, setRegisterValue] = React.useState({});
  const [missingInputError, setMissingInputError] = React.useState('');

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onRegister = () => {
    if (Object.values(registerValue).length === numberOfInputFields) {
      registerUser({ ...registerValue });
      setMissingInputError('');
    } else setMissingInputError('Wypełnij wszystkie pola');
  };

  const handleInputChange = event => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };
  const error = registerError || missingInputError;

  return (
    <Background>
      <Wrapper>
        <StyledTitle>Rejestracja</StyledTitle>
        {REGISTER_INPUTS.map(input => (
          <StyledInput
            key={input.name}
            name={input.name}
            placeholder={input.title}
            type={input.type}
            onChange={handleInputChange}
            value={registerValue[input.name]}
          />
        ))}
        <StyledButton onClick={onRegister}>Zarejestruj</StyledButton>
        {error ? (
          <StyledError data-testid="register-error">{error}</StyledError>
        ) : (
          <StyledError />
        )}
        <StyledLink isNavbar={false} to="/login">
          Wróć do logowania
        </StyledLink>
      </Wrapper>
    </Background>
  );
};

Register.defaultProps = {
  registerError: '',
  token: '',
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registerError: PropTypes.string,
  token: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Register);
