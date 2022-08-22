import { pagePaths } from 'modules/defines/paths';
import { palette, size } from 'modules/defines/styles';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderFormContaienr = styled.div`
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

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState('싸 삼 프 렌 즈');
  
  useEffect(() => {
    switch (location.pathname) {
      case (pagePaths.home): return setTitle('싸 삼 프 렌 즈');
      case (pagePaths.user): {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin) return setTitle('마이 페이지');
        else return setTitle('로그인');
      }
      case (pagePaths.cart): return setTitle('장바구니');
      default: return setTitle('싸 삼 프 렌 즈');
    }
  }, [location]);
  
  return (
    <HeaderFormContaienr>
      {title}
    </HeaderFormContaienr>
  );
};

export default Header;