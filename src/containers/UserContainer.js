import React, { useEffect, useState } from 'react';
import UserInfo, { InputBox, UserInputWrapper, UserWrapper } from 'components/UserForm';
import LoginContainer from './LoginContainer';

const UserContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    name: '김석환',
    id: {
      value: 'kimsh8337',
      title: '아이디'
    },
    address: {
      value: '내 집좀 찾아주세요',
      title: '주소'
    },
    point: {
      value: 500,
      title: '포인트'
    }
  });

  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, [localStorage]);

  const handleInputValue = (value, input) => {
    const newObj = {};
    newObj[value[0]] = { ...value[1], value: input };
    setUser({ ...user, ...newObj });
  };

  if (!isLogin) {
    return (
      <LoginContainer setIsLogin={setIsLogin} />
    );
  } else {
    return (
      <UserWrapper>
        <UserInfo user={user}>
          {Object.entries(user).map((value, index) => (
            <UserInputWrapper key={index}>
              {value[0] !== "name" && (
                <InputBox
                  title={value[1].title}
                  value={value[1].value}
                  onChange={(input) => handleInputValue(value, input)}
                />
              )}
            </UserInputWrapper>
          ))}
        </UserInfo>
      </UserWrapper>
    );
  }
};

export default UserContainer;