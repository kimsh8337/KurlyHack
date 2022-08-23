import React, { useState } from 'react';
import CartForm, { CartNoItems, CartPriceBox } from 'components/CartForm';

const CartContainer = () => {
  const [cart, setCart] = useState([
    {
      src: 'https://cdn.huffingtonpost.kr/news/photo/202102/106356_200066.jpeg', 
      title: '너무너무 맛있는 소고기',
      price: 29900,
      count: 1,
      checked: true
    },
    {
      src: 'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201808/17/6a951a16-f7a4-490d-8f75-7e01c9a396ad.jpg',
      title: '따끈따끈 쌀밥',
      price: 19900,
      count: 1,
      checked: true
    },
    {
      src: 'https://health.chosun.com/site/data/img_dir/2022/06/10/2022061001724_0.jpg',
      title: '갓 짠 우유',
      price: 2900,
      count: 1,
      checked: true
    },
  ]);

  const handleChecked = (index) => {
    setCart(
      cart.filter(d => {
        if (cart.indexOf(d) === index) {
          const newObj = d;
          newObj.checked = !d.checked;
          return newObj;
        } else {
          return d;
        }
      })
    )
  };

  const handleDelete = (index) => {
    setCart(cart.filter(d => cart.indexOf(d) !== index));
  };

  const handleCountUp = (index) => {
    setCart(
      cart.filter(d => {
        if (cart.indexOf(d) === index) {
          const newObj = d;
          newObj.count = d.count + 1;
          return newObj;
        } else {
          return d;
        }
      })
    )
  };

  const handleCountDown = (index) => {
    setCart(
      cart.filter(d => {
        if (cart.indexOf(d) === index) {
          const newObj = d;
          newObj.count = d.count - 1;
          return newObj
        } else {
          return d;
        }
      })
    )
  };

  if (localStorage.getItem('isLogin') && cart.length > 0) {
    return (
      <CartForm 
        cart={cart} 
        countUp={handleCountUp} 
        countDown={handleCountDown} 
        onChange={handleChecked}
        handleDelete={handleDelete}
      >
        <CartPriceBox cart={cart} />
      </CartForm>
    );
  } else {
    return (
      <CartNoItems>장바구니에 상품이 없습니다!</CartNoItems>
    )
  }
};

export default CartContainer;