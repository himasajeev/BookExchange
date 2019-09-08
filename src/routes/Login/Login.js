import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

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

const Login = ({ loginUser, loginError, token, history }) => {
  const [loginValue, setLoginValue] = React.useState({});

  React.useEffect(() => {
    if (token) history.push('/');
  }, [history, token]);

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
  token: '',
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  token: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
