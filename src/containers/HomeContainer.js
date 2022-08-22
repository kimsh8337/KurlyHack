import React from 'react';
import ItemsExplainBox, { FontTitle, HomeWrapper } from 'components/HomeForm';
import Carousel from 'components/Carousel';

const HomeContainer = () => {
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
  return (
    <HomeWrapper>
      <Carousel time="3000" />
      <FontTitle>이 상품은 어때요?</FontTitle>
      <ItemsExplainBox items={items} />
    </HomeWrapper>
  );
};

export default HomeContainer;