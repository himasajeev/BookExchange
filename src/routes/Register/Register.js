import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { toast } from 'react-toastify';
import NamedInput from '../../components/NamedInput/NamedInput';
import {
  StyledBackground,
  StyledButton,
  StyledLoginLink,
  StyledTitle,
  StyledWrapper,
} from '../Login/LoginStyled';
import { isFormValid } from '../../utils/validateForm';
import PassInput from '../../components/PasswordInput/PassInput';

const numberOfInputFields = 5;

const Register = ({ registerUser, token, history }) => {
  const [registerValue, setRegisterValue] = React.useState({});

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onRegister = () => {
    if (isFormValid(registerValue, numberOfInputFields)) {
      registerUser({ ...registerValue });
    } else toast.error('Wypełnij wszystkie pola.');
  };

  const handleInputChange = event => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

  const { password, year, email, name, surname } = registerValue;
  return (
    <StyledBackground>
      <StyledWrapper>
        <StyledTitle>Rejestracja</StyledTitle>
        <NamedInput
          name="email"
          label="E-mail"
          type="text"
          onChange={handleInputChange}
          value={email}
        />
        <PassInput
          name="password"
          label="Hasło"
          onChange={handleInputChange}
          value={password}
        />
        <NamedInput
          name="name"
          label="Imię"
          type="text"
          onChange={handleInputChange}
          value={name}
        />
        <NamedInput
          name="surname"
          label="Nazwisko"
          type="text"
          onChange={handleInputChange}
          value={surname}
        />
        <NamedInput
          name="year"
          label="Nr. indeksu"
          type="number"
          onChange={handleInputChange}
          value={year}
        />
        <StyledLoginLink to="/login">Wróć do logowania</StyledLoginLink>
        <StyledButton variant="primary" onClick={onRegister}>
          Zarejestruj
        </StyledButton>
      </StyledWrapper>
    </StyledBackground>
  );
};

Register.defaultProps = {
  token: '',
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  token: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Register);
