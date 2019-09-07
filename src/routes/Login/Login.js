import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import NamedInput from '../../components/NamedInput/NamedInput';
import Button from '../../components/Button/Button';
import { LOGIN_INPUTS } from './constants';
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

const Login = ({ loginUser, loginError }) => {
  const [loginValue, setLoginValue] = React.useState({});

  const onLogin = () => {
    loginUser({ ...loginValue });
  };

  const handleInputChange = event => {
    setLoginValue({ ...loginValue, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <span>Login</span>
      {LOGIN_INPUTS.map(input => (
        <NamedInput
          key={input.name}
          name={input.name}
          title={input.title}
          type={input.type}
          onChange={handleInputChange}
          value={loginValue[input.name]}
        />
      ))}

      <StyledButton onClick={onLogin}>Zaloguj</StyledButton>
      <Link to="/register">Nie masz konta?</Link>
      <StyledError>{loginError}</StyledError>
    </Wrapper>
  );
};

Login.defaultProps = {
  loginError: '',
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

export default Login;
