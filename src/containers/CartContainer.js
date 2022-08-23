import React, { useEffect, useState } from 'react';
import CartForm, { CartNoItems, CartOrderButton, CartPriceBox } from 'components/CartForm';
import { API } from 'modules/api/api';

const CartContainer = () => {
  const [cart, setCart] = useState([]);
  const [isNeighbor, setIsNeighbor] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem('user')).user_id;
    const zip_code = JSON.parse(localStorage.getItem('user')).zip_code;
    API.getNowOrder(user_id).then(
      response => {
        console.log(response);
        const data = response.map(d => {
          const checked = { checked: true };
          return { ...d, ...checked };
        });

        setCart(data);
      },
      error => {
        console.log(error);
      }
    );
    API.searchNeighbor(zip_code).then(
      response => {
        setIsNeighbor(response);
      },
      error => {
        console.log(error);
      }
    )
  }, []);
  
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
  
  const handleOrder = () => {
    const user_id = JSON.parse(localStorage.getItem('user')).user_id;
    const itemList = cart.filter(d => d.checked && d);
    API.order({
      order:{
        user_id: user_id, 
        price: total
      }, 
      orderItemList : itemList
    }).then(
      response => {
        alert('주문이 완료되었습니다!');
        setCart([]);
      },
      error => {
        console.log(error);
      }
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
        <CartPriceBox cart={cart} isNeighbor={isNeighbor} total={total} setTotal={setTotal} />
        <CartOrderButton onClick={handleOrder}>
          주문하기
        </CartOrderButton>
      </CartForm>
    );
  } else {
    return (
      <CartNoItems>장바구니에 상품이 없습니다!</CartNoItems>
    )
  }
};

export default CartContainer;