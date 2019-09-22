import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import { LOGIN_INPUTS } from './constants';

import {
  Background,
  Wrapper,
  StyledButton,
  StyledInput,
  StyledLink,
  StyledTitle,
  StyledError,
} from './LoginStyled';

const numberOfInputFields = 2;

const Login = ({ loginUser, loginError, token, history }) => {
  const [loginValue, setLoginValue] = React.useState({});
  const [missingInputError, setMissingInputError] = React.useState('');

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onLogin = () => {
    if (Object.values(loginValue).length === numberOfInputFields) {
      loginUser({ ...loginValue });
      setMissingInputError('');
    } else setMissingInputError('Wypełnij wszystkie pola');
  };

  const handleInputChange = event => {
    setLoginValue({ ...loginValue, [event.target.name]: event.target.value });
  };

  const error = loginError || missingInputError;
  return (
    <Background>
      <Wrapper>
        <StyledTitle>Logowanie</StyledTitle>

        {LOGIN_INPUTS.map(input => (
          <StyledInput
            key={input.name}
            name={input.name}
            placeholder={input.title}
            type={input.type}
            onChange={handleInputChange}
            value={loginValue[input.name]}
          />
        ))}

        <StyledButton onClick={onLogin}>Zaloguj</StyledButton>
        {error ? (
          <StyledError data-testid="login-error">{error}</StyledError>
        ) : (
          <StyledError />
        )}
        <StyledLink isNavbar={false} to="/register">
          Nie masz konta?
        </StyledLink>
      </Wrapper>
    </Background>
  );
};

Login.defaultProps = {
  loginError: '',
  token: '',
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  token: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
