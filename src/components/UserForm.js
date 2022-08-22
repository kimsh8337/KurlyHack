import React from 'react';
import styled from 'styled-components';
import { palette } from 'modules/defines/styles';

export const UserWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const UserInfoWrapper = styled.div`
  width: 100%;
`;

const UserName = styled.span`
  color: ${palette.black};
  font-size: 20px;
  font-weight: bold;
`;

const UserInfo = ({ children, user }) => {
  return (
    <UserInfoWrapper>
      <UserName>안녕하세요 {user.name}님!</UserName>
      {children}
    </UserInfoWrapper>
  );
};

export default UserInfo;

export const UserInputWrapper = styled.div`
  margin-top: 10px;
`;

const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex; 
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${palette.black};
  margin-top: 5px;
  input {
    width: 100%;
    color: ${palette.black};
    background-color: transparent;
    text-indent: 5px;
  }
`;

export const InputBox = ({ title, value, onChange }) => {
  const handleInputValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputBoxWrapper>
      <span>{title}</span>
      <InputWrapper>
        <input type="text" value={value} placeholder={value} onChange={handleInputValue} />
      </InputWrapper>
    </InputBoxWrapper>
  );
};