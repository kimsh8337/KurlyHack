import React from 'react';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const FontTitle = styled.h4`
  margin-left: 10px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.span`
  margin: 5px 2px;
  font-size: 12px;
`;

const ItemPrice = styled.span`
  font-size: 11px;
  font-weight: bold;
  margin: 0 2px;
`;

const ItemsExplainBox = ({ items }) => {

    return (
      <ItemsWrapper>
        {items.map((value, index) => (
          <ItemWrapper key={index}>
            <img src={value.src} alt={value.title} width="100%" height="150px" />
            <ItemTitle>{value.title}</ItemTitle>
            <ItemPrice>{value.price}원</ItemPrice>
          </ItemWrapper>
        ))}
    </ItemsWrapper>
    );
};

export default ItemsExplainBox;