import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CarouselFormContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const CarouselImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(-100%);
`;

const Carousel = ({ time, items }) => {
  const [imgState, setImgState] = useState(1);
  const [imgData, setImgData] = useState([
    'https://health.chosun.com/site/data/img_dir/2022/06/10/2022061001724_0.jpg',
    'https://cdn.huffingtonpost.kr/news/photo/202102/106356_200066.jpeg', 
    'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201808/17/6a951a16-f7a4-490d-8f75-7e01c9a396ad.jpg',
    'https://health.chosun.com/site/data/img_dir/2022/06/10/2022061001724_0.jpg',
    'https://cdn.huffingtonpost.kr/news/photo/202102/106356_200066.jpeg', 
  ]);
  const ImgWrapper = useRef(null);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setImgState(prev => {
        if (prev < imgData.length - 1) {
          ImgWrapper.current.style.transition = 'transform 0.2s ease-in-out';
          ImgWrapper.current.style.transform = `translateX(-${(prev + 1) * 100}%)`;
          if (prev === imgData.length - 2) {
            setTimeout(() => {
              ImgWrapper.current.style.transition = 'none';
              ImgWrapper.current.style.transform = 'translateX(-100%)';
            }, 200);
            return 1;
          }
          return prev + 1;
        }
      });
    }, time);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const arr = [];
      arr.push(items[items.length - 1].image);
      items.map(v => {
        arr.push(v.image);
      });
      arr.push(items[0].image);
      setImgData(arr);
    }
  }, [items]);

  return (
    <CarouselFormContainer>
      <CarouselImgWrapper ref={ImgWrapper}>
        {imgData.length > 0 && imgData.map((value, index) => (
          <img key={index} src={value} alt="carouselImg" width="100%" height="100%" />
        ))}    
      </CarouselImgWrapper>
    </CarouselFormContainer>
  );
};

export default Carousel;