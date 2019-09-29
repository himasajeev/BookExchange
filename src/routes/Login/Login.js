import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  StyledWrapper,
  StyledTitle,
  StyledButton,
  StyledLoginLink,
  StyledBackground,
  StyledUjImage,
  StyledElsa,
  StyledSiteTitle,
} from './LoginStyled';
import NamedInput from '../../components/NamedInput/NamedInput';
import PassInput from '../../components/PasswordInput/PassInput';
import { isFormValid } from '../../utils/validateForm';

const numberOfInputFields = 2;

const Login = ({ loginUser, token, history }) => {
  const [loginValue, setLoginValue] = React.useState({});

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onLogin = () => {
    if (isFormValid(loginValue, numberOfInputFields)) {
      loginUser({ ...loginValue });
    } else {
      toast.error('Wypełnij wszystkie pola.');
    }
  };

  const handleInputChange = event => {
    setLoginValue({ ...loginValue, [event.target.name]: event.target.value });
  };

  return (
    <StyledBackground>
      <StyledUjImage src="./images/logo.png" alt="logo" />
      <StyledSiteTitle variant="h1" component="h3">
        Giełda Podręczników WPiA UJ
      </StyledSiteTitle>
      <StyledWrapper>
        <StyledTitle variant="h1" component="h3">
          Login
        </StyledTitle>
        <NamedInput
          name="email"
          label="E-mail"
          onChange={handleInputChange}
          value={loginValue.email}
        />
        <PassInput
          name="password"
          label="Hasło"
          onChange={handleInputChange}
          value={loginValue.password}
        />
        <StyledLoginLink to="/register">Nie masz konta?</StyledLoginLink>
        <StyledButton onClick={onLogin}>Zaloguj</StyledButton>
      </StyledWrapper>
      <StyledElsa src="./images/elsa.png" alt="elsa" />
    </StyledBackground>
  );
};

Login.defaultProps = {
  token: '',
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  token: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
