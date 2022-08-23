import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { pagePaths } from 'modules/defines/paths';
import { palette, size } from 'modules/defines/styles';
import LogoutIcon from 'components/icons/LogoutIcon.svg';

const HeaderFormContaienr = styled.div`
  position: relative;
  width: 100%;
  height: ${size.header}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.primary};
  font-weight: bold;
  font-size: 15px;
  color: ${palette.white};
  padding-top: 30px;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: ${size.header - 50};
  right: 10px;
  width: 20px;
  height: 20px;
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('싸 삼 프 렌 즈');
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  useEffect(() => {
    setIsLogin(() => localStorage.getItem('isLogin'));
    switch (location.pathname) {
      case (pagePaths.home): return setTitle('싸 삼 프 렌 즈');
      case (pagePaths.user): {
        if (isLogin) return setTitle('마이 페이지');
        else return setTitle('로그인');
      }
      case (pagePaths.cart): return setTitle('장바구니');
      default: return setTitle('싸 삼 프 렌 즈');
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    navigate(pagePaths.home);
    setIsLogin(() => localStorage.getItem('isLogin'));
  };
  
  return (
    <HeaderFormContaienr>
      {title}
      {isLogin && (
        <LogoutButton onClick={handleLogout}>
          <img src={LogoutIcon} width="20" height="20" alt="logout" />
        </LogoutButton>
      )}
    </HeaderFormContaienr>
  );
};

export default Header;