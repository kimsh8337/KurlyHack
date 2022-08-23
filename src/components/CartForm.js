import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette, size } from 'modules/defines/styles';
import { ItemImage, ItemPrice, ItemTitle } from './HomeForm';

const CartCountWrapper = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid ${palette.gray['0']};
  border-radius: 5px;
  display: flex;
`;

const CartCountButtons = styled.button`
  width: 100%;
  height: 30px;
`;

const CartCount = styled.span`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const CartCountBox = ({ count, countUp, countDown }) => {
  const handleCountDown = () => {
    if (count === 1) return;
    countDown();
  };

  const handleCountUp = () => {
    countUp();
  };

  return (
    <CartCountWrapper>
      <CartCountButtons onClick={handleCountDown}>-</CartCountButtons>
      <CartCount>{count}</CartCount>
      <CartCountButtons onClick={handleCountUp}>+</CartCountButtons>
    </CartCountWrapper>
  );
};

const CartWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const CartItemsWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const CartItemsInfo = styled.div`
  display: flex;
  margin-left: 25px;
`;

const CartPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-left: 30px;
  ${ItemPrice} {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  ${ItemTitle} {
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

const CartCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 15px;
  font-size: 11px;
  color: ${palette.gray['0']};
  border-radius: 5px;
  margin-left: auto;
`;

const CartForm = ({ children, cart, countUp, countDown, onChange, handleDelete }) => (
  <CartWrapper>
    {cart.length > 0 && cart.map((value, index) => (
      <CartItemsWrapper key={index}>
        <CheckBoxWrapper>
          <CartCheckbox type="checkbox" onChange={() => onChange(index)} checked={value.checked} />
          <ItemTitle>{value.item_name}</ItemTitle>
          <DeleteButton onClick={() => handleDelete(index)}>삭제</DeleteButton>
        </CheckBoxWrapper>
        <CartItemsInfo>
          <ItemImage src={value.image} alt={value.item_name} width="150px" height="150px" />
          <CartPriceInfo>
            <ItemPrice>{value.price}원</ItemPrice>
            <CartCountBox count={value.count} countUp={() => countUp(index)} countDown={() => countDown(index)} />
          </CartPriceInfo>
        </CartItemsInfo>
      </CartItemsWrapper>
    ))}
    {children}
  </CartWrapper>
);

export default CartForm;

const CartPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${palette.gray['0']};
  padding: 20px;
`;

const CartPriceTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  strong {
    width: 100px;
    text-align: end;
  }
`;

const CartPrice = styled.span`
  font-size: 20px;
`;

export const CartPriceBox = ({ cart, isNeighbor, total, setTotal }) => {
  const [cartPrice, setCartPrice] = useState(0);
  const deliveryFee = isNeighbor ? 0 : 3000;

  useEffect(() => {
    let total = 0;
    cart.map((value) => {
      if (value.checked) total += (value.price * value.count);
    })
    setCartPrice(total);
  }, [cart]);

  useEffect(() => {
    setTotal(cartPrice + deliveryFee);
  }, [cartPrice]);

  return (
    <CartPriceWrapper>
      <CartPriceTitle>
        <CartPrice>상품가격 :</CartPrice>
        <strong> {cartPrice}원</strong>
      </CartPriceTitle>
      <CartPriceTitle>
        <CartPrice>배송비 :</CartPrice>
        <strong>{deliveryFee}원</strong>
      </CartPriceTitle>
      <CartPriceTitle>
        <CartPrice>총 주문가격 :</CartPrice>
        <strong>{total}원</strong>
      </CartPriceTitle>
    </CartPriceWrapper>
  );
};

export const CartOrderButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${palette.primary};
  color: ${palette.white};
  border-radius: 5px;
  font-size: 15px;
`;

export const CartNoItems = styled.div`
  width: 100%;
  height: calc(100vh - ${size.footer}px - ${size.header}px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;