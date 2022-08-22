import React from 'react';
import LoginForm from 'components/Login';

const LoginContainer = ({ setIsLogin }) => {
  const handleLogin = () => {
    localStorage.setItem('isLogin', true);
    setIsLogin(true);
    console.log('login api');
  };

  return (
    <LoginForm onClick={handleLogin} />
  );
};

export default LoginContainer;