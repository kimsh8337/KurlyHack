import React, { useEffect, useState } from 'react';
import UserInfo, { BeforeOrderBox, InputBox, UserInputWrapper, UserWrapper } from 'components/UserForm';
import LoginContainer from './LoginContainer';
import { API } from 'modules/api/api';

const UserContainer = () => {
  const [user, setUser] = useState({});
  const [ordered, setOrdered] = useState([]);
  const isLogin = localStorage.getItem('isLogin');

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      setUser(userInfo);

      API.getBeforeOrder(userInfo.user_id).then(
        response => {
          console.log(response);
          setOrdered(response);
        },
        error => {
          console.log(error);
        }
      )
    }
  }, []);


  const handleInputValue = (value, input) => {
    const newObj = {};
    newObj[value[0]] = { ...value[1], value: input };
    setUser({ ...user, ...newObj });
  };
  
  if (!isLogin) {
    return (
      <LoginContainer />
    );
  } else {
    return (
      <UserWrapper>
        <UserInfo user={user}>
          {user && Object.entries(user).map((value, index) => (
            <UserInputWrapper key={index}>
              {value[0] !== 'password' && (
                <InputBox
                  title={value[0]}
                  value={value[1]}
                  onChange={(input) => handleInputValue(value, input)}
                />
              )}
            </UserInputWrapper>
          ))}
        </UserInfo>
        <BeforeOrderBox ordered={ordered} />
      </UserWrapper>
    );
  }
};

export default UserContainer;