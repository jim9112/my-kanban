import { NextPage } from 'next';
import { useState } from 'react';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';

const Login: NextPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <h1>This is the login page</h1>
      {login ? (
        <LoginForm setLogin={setLogin} />
      ) : (
        <RegisterForm setLogin={setLogin} />
      )}
    </div>
  );
};

export default Login;
