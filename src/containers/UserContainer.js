import React, { useEffect, useState } from 'react';
import UserInfo, { BeforeOrderBox, InputBox, UserInputWrapper, UserWrapper } from 'components/UserForm';
import LoginContainer from './LoginContainer';

const UserContainer = () => {
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
  const [ordered, setOrdered] = useState([
    {
      order: {
        date: '2022-05-30'
      },
      orderItemList: [
        {
          src: 'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201808/17/6a951a16-f7a4-490d-8f75-7e01c9a396ad.jpg',
          title: '따끈따끈 쌀밥',
          price: 19900,
          count: 1,
        },
        {
          src: 'https://health.chosun.com/site/data/img_dir/2022/06/10/2022061001724_0.jpg',
          title: '갓 짠 우유',
          price: 2900,
          count: 1,
          checked: true
        },
      ]
    }
  ]);
  const isLogin = localStorage.getItem('isLogin');


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
        <BeforeOrderBox ordered={ordered} />
      </UserWrapper>
    );
  }
};

export default UserContainer;