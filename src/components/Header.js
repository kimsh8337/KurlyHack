import { palette, size } from 'modules/defines/styles';
import React from 'react';
import styled from 'styled-components';

const HeaderFormContaienr = styled.div`
  width: 100%;
  height: ${size.header}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.primary};
  font-weight: bold;
  font-size: 15px;
  color: ${palette.white};
`;

const Header = () => {
  return (
    <HeaderFormContaienr>
      싸 삼 프 렌 즈
    </HeaderFormContaienr>
  );
};

export default Header;