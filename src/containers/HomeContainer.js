import React from 'react';
import ItemsExplainBox, { Banner, FontTitle, HomeWrapper } from 'components/HomeForm';
import Carousel from 'components/Carousel';

const HomeContainer = () => {
  const bannerText = [
    '이웃 배송 시 500p 추가 적립 기회!!',
    '이웃 배송으로 20000만원 이상 시 무료배송!!'
  ]
  const items = [
    {
      src: 'https://cdn.huffingtonpost.kr/news/photo/202102/106356_200066.jpeg', 
      title: '너무너무 맛있는 소고기',
      price: 29900,
    },
    {
      src: 'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201808/17/6a951a16-f7a4-490d-8f75-7e01c9a396ad.jpg',
      title: '따끈따끈 쌀밥',
      price: 19900,
    },
    {
      src: 'https://health.chosun.com/site/data/img_dir/2022/06/10/2022061001724_0.jpg',
      title: '갓 짠 우유',
      price: 2900,
    },
  ];

  const handleGetItem = ( title ) => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) alert(`${title}상품이 장바구니에 담겼습니다!`);
    else alert('로그인 해주세요!');
  };

  return (
    <HomeWrapper>
      <Carousel time="3000" />
      <FontTitle>이 상품은 어때요?</FontTitle>
      <Banner>{bannerText[1]}</Banner>
      <ItemsExplainBox items={items} handleGetItem={handleGetItem} />
    </HomeWrapper>
  );
};

export default HomeContainer;