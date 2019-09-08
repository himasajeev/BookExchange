import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import NamedInput from '../../components/NamedInput/NamedInput';
import Button from '../../components/Button/Button';
import { REGISTER_INPUTS } from './constants';
import Link from '../../components/Link/Link';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  padding: 10px;
  background: aqua;
`;

const StyledError = styled.span`
  color: red;
`;

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
    <Wrapper>
      <span>Register</span>
      {REGISTER_INPUTS.map(input => (
        <NamedInput
          key={input.name}
          name={input.name}
          title={input.title}
          type={input.type}
          onChange={handleInputChange}
          value={registerValue[input.name]}
        />
      ))}
      <StyledButton onClick={onRegister}>Zarejestruj</StyledButton>
      <StyledError>{registerError}</StyledError>
      <Link to="/login">Wróc do logowania</Link>
    </Wrapper>
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
