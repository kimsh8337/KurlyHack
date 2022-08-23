import React from 'react';
import LoginForm from 'components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { pagePaths } from 'modules/defines/paths';

const LoginContainer = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem('isLogin', true);
    navigate(pagePaths.home);
    console.log('login api');
  };

  return (
    <LoginForm onClick={handleLogin} />
  );
};

export default LoginContainer;