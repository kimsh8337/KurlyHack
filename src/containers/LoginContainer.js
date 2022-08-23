import React, { useState } from 'react';
import LoginForm from 'components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { pagePaths } from 'modules/defines/paths';
import { API } from 'modules/api/api';

const LoginContainer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ user_id: '', password: '' });
  
  const handleLogin = () => {
    API.login(user).then(
      response => {
        API.getUserInfo(user.user_id).then(
          response => {
            console.log(response);
            localStorage.setItem('isLogin', true);
            localStorage.setItem('user', JSON.stringify(response));
            navigate(pagePaths.home);
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        alert('아이디 및 비밀번호를 확인해주세요!');
        console.log(error);
      }
    )
  };

  const handleInput = (type, value) => {
    const newObj = {};
    newObj[type] = value;
    setUser({
      ...user,
      ...newObj
    });
  };
  
  return (
    <LoginForm
      user={user}
      onChange={handleInput}
      onClick={handleLogin}
    />
  );
};

export default LoginContainer;