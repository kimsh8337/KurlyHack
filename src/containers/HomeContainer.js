import React, { useEffect, useState } from 'react';
import ItemsExplainBox, { Banner, FontTitle, HomeWrapper } from 'components/HomeForm';
import Carousel from 'components/Carousel';
import { API } from 'modules/api/api';

const HomeContainer = () => {
  const bannerText = [
    '이웃 배송 시 500p 추가 적립 기회!!',
    '이웃 배송으로 20000만원 이상 시 무료배송!!'
  ]
  const [items, setItems] = useState([]);
  const [isNeighbor, setIsNeighbor] = useState(false);

  useEffect(() => {
    const zip_code = JSON.parse(localStorage.getItem('user')).zip_code;
    API.getItems().then(
      response => {
        setItems(response);
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

  const handleGetItem = ( value ) => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) {
      API.putItem({ 
        user_id: JSON.parse(localStorage.getItem('user')).user_id, 
        orderItem: {
          item_name: value.item_name, 
          price: value.price,
          image: value.image
        }
      }).then(
        response => {
          alert(`${value.item_name}상품이 장바구니에 담겼습니다!`);
        },
        error => {
          console.log(error);
        }
      )
    }
    else alert('로그인 해주세요!');
  };

  return (
    <HomeWrapper>
      <Carousel time="3000" items={items} />
      <FontTitle>이 상품은 어때요?</FontTitle>
      <Banner>{!isNeighbor ? bannerText[0] : bannerText[1]}</Banner>
      <ItemsExplainBox items={items} handleGetItem={handleGetItem} />
    </HomeWrapper>
  );
};

export default HomeContainer;