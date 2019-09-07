import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NamedInput from '../../components/NamedInput/NamedInput';
import Button from '../../components/Button/Button';
import { REGISTER_INPUTS } from './constants';

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

const Register = ({ registerUser, registerError }) => {
  const [registerValue, setRegisterValue] = React.useState({});

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
    </Wrapper>
  );
};

Register.defaultProps = {
  registerError: '',
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registerError: PropTypes.string,
};

export default Register;
