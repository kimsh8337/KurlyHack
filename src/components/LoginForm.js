import React from 'react';
import styled from 'styled-components';
import { palette } from 'modules/defines/styles';

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  color: ${palette.black};
  font-size: 14px;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginInputTitle = styled.div`
  width: 70px;
  flex-shrink: 0;
`;

const LoginInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  color: ${palette.black};
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.black};
  font-size: 14px;
  input {
    width: 100%;
    color: ${palette.black};
    background-color: transparent;
    text-indent: 5px;
  }
`;

const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${palette.primary};
  border-radius: 5px;
  color: ${palette.white};
  margin-left: 10px;
`;

const LoginForm = ({ user, onChange, onClick }) => {
  return (
    <LoginWrapper>
      <div>
        <LoginInputWrapper>
          <LoginInputTitle>아이디</LoginInputTitle>
          <LoginInput>
            <input type="text" value={user.user_id} onChange={(e) => onChange('user_id', e.target.value)} />
          </LoginInput>
        </LoginInputWrapper>
        <LoginInputWrapper>
          <LoginInputTitle>패스워드</LoginInputTitle>
          <LoginInput>
            <input type="password" value={user.password} onChange={(e) => onChange('password', e.target.value)} />
          </LoginInput>
        </LoginInputWrapper>
      </div>
      <LoginButton onClick={onClick && onClick}>
        로그인
      </LoginButton>
    </LoginWrapper>
  );
};

export default LoginForm;