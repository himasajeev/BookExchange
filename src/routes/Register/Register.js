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

const Register = ({ registerUser, registerError, token, history }) => {
  const [registerValue, setRegisterValue] = React.useState({});

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onRegister = () => {
    registerUser({ ...registerValue });
  };

  const handleInputChange = event => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

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
        <StyledError>{registerError}</StyledError>
        <StyledLink to="/login">Wróć do logowania</StyledLink>
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
