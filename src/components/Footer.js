import React from 'react';
import styled from 'styled-components';
import { palette, size } from 'modules/defines/styles';
import HomeIcon from 'components/icons/HomeIcon.svg';
import UserIcon from 'components/icons/UserIcon.svg';
import CartIcon from 'components/icons/CartIcon.svg';

const FooterFromContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${size.footer}px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${palette.black};
  background-color: ${palette.white};
  padding: 0 20px;
`;

const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Footer = () => {
  const footerItems = [
    {
      icon: HomeIcon,
      name: 'Home'
    },
    {
      icon: UserIcon,
      name: 'User'
    },
    {
      icon: CartIcon,
      name: 'Cart'
    }
  ];

  return (
    <FooterFromContainer>
      {footerItems.map((value, index) => (
        <FooterItem key={index}>
          <img src={value.icon} width="20" height="20" alt={value.name} />
        </FooterItem>
      ))}
    </FooterFromContainer>
  );
};

export default Footer;