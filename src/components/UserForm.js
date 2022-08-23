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
      <UserName>안녕하세요 {user.user_id}님!</UserName>
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
      <span>{title === 'user_id' && '아이디'}</span>
      <span>{title === 'point' && '포인트'}</span>
      <span>{title === 'address' && '주소'}</span>
      <span>{title === 'zip_code' && '우편번호'}</span>
      <InputWrapper>
        <input type="text" value={value} placeholder={value} onChange={handleInputValue} disabled />
      </InputWrapper>
    </InputBoxWrapper>
  );
};

const BeforeOrderWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray['0']};
  margin-top: 20px;
  padding: 10px;
`;

const BeforeOrderItemsWrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 30px;
`;

const BeforeOrderTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BeforeOrderDate = styled.span`
  font-size: 14px;
`;

const BeforeOrderPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const BeforeOrderItem = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

const BeforeOrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  margin-left: auto;
`;

const BeforeOrderInfo = styled.span`
  font-size: 15px;
`;

export const BeforeOrderBox = ({ ordered }) => {
  return (
    <BeforeOrderWrapper>
      <strong>이전 주문 내역</strong>
      {ordered.length > 0 && ordered.map((value, index) => (
        <BeforeOrderItemsWrapper key={index}>
          <BeforeOrderTitle>
            <BeforeOrderDate>
              주문일 : {value.order.date.split('T')[0]}
            </BeforeOrderDate>
            <BeforeOrderPrice>
              총금액 : {value.order.price}원
            </BeforeOrderPrice>
          </BeforeOrderTitle>
          {value.orderItems.map((v, i) => (
            <BeforeOrderItem key={i}>
              <img src={v.image} alt={v.item_name} width="200px" height="150px" />
              <BeforeOrderInfoWrapper>
                <BeforeOrderInfo>{v.item_name}</BeforeOrderInfo>
                <BeforeOrderInfo>{v.price * v.count}원</BeforeOrderInfo>
              </BeforeOrderInfoWrapper>
            </BeforeOrderItem>
          ))}
        </BeforeOrderItemsWrapper>
      ))}
    </BeforeOrderWrapper>
  );
};