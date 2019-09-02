import React from 'react';
import styled from '@emotion/styled';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Login = () => {
  const [loginValue, setLoginValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const onLogin = () => {
    console.log('login');
  };
  const onRegister = () => {
    console.log('resgister');
  };

  return (
    <Wrapper>
      Login
      <Input />
      <Input />
      <Input />
      <ButtonsWrapper>
        <Button onClick={onLogin}>Zaloguj</Button>
        <Button onClick={onRegister}>Zarejestruj</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Login;
