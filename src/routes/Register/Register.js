import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { toast } from 'react-toastify';
import Checkbox from '@material-ui/core/Checkbox';
import NamedInput from '../../components/NamedInput/NamedInput';
import {
  StyledBackground,
  StyledButton,
  StyledElsa,
  StyledFormControlLabel,
  StyledLoginLink,
  StyledRegLink,
  StyledSiteTitle,
  StyledTitle,
  StyledUjImage,
  StyledWrapper,
} from '../Login/LoginStyled';
import { isFormValid } from '../../utils/validateForm';
import PassInput from '../../components/PasswordInput/PassInput';
import { EULA_URL } from '../../constants/eulaUrl';

const openEula = event => {
  event.preventDefault();
  window.open(EULA_URL, '_blank');
};

const numberOfInputFields = 5;

const Register = ({ registerUser, token, history }) => {
  const [registerValue, setRegisterValue] = React.useState({});
  const [isCheckBoxSelected, setIsCheckBoxSelected] = React.useState(false);

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

  const onRegister = () => {
    if (isFormValid(registerValue, numberOfInputFields) && isCheckBoxSelected) {
      registerUser({ ...registerValue });
    } else if (isCheckBoxSelected) toast.error('Wypełnij wszystkie pola.');
    else toast.error('Zaakceptuj regulamin i politkę prywatności.');
  };

  const handleInputChange = event => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckBoxChange = () => {
    setIsCheckBoxSelected(!isCheckBoxSelected);
  };

  const { password, year, email, name, surname } = registerValue;
  return (
    <StyledBackground>
      <StyledUjImage src="./images/logo.png" alt="logo" />
      <StyledSiteTitle variant="h1" component="h3">
        Giełda Podręczników WPiA UJ
      </StyledSiteTitle>
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
        <StyledButton onClick={onRegister}>Zarejestruj</StyledButton>
        <StyledFormControlLabel
          control={
            <Checkbox
              checked={isCheckBoxSelected}
              onChange={handleCheckBoxChange}
              color="primary"
            />
          }
          label={
            <StyledRegLink onClick={openEula}>
              Akceptuje regulamin i politkę prywatności.
            </StyledRegLink>
          }
        />
      </StyledWrapper>
      <StyledElsa src="./images/elsa.png" alt="elsa" />
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
