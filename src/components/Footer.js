import React from 'react';
import styled from 'styled-components';
import { palette, size } from 'modules/defines/styles';
import HomeIcon from 'components/icons/HomeIcon.svg';
import UserIcon from 'components/icons/UserIcon.svg';
import CartIcon from 'components/icons/CartIcon.svg';
import { useNavigate } from 'react-router-dom';

const FooterFromContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${size.maxWidth}px;
  height: ${size.footer}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${palette.black};
  background-color: ${palette.white};
  padding: 0 20px;
`;

const FooterItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;


const Footer = () => {
  const navigate = useNavigate();
  const footerItems = [
    {
      icon: HomeIcon,
      name: 'home'
    },
    {
      icon: UserIcon,
      name: 'user'
    },
    {
      icon: CartIcon,
      name: 'cart'
    }
  ];

  const handleNavigate = (name) => {
    navigate(name);
  };

  return (
    <FooterFromContainer>
      {footerItems.map((value, index) => (
        <FooterItem key={index} onClick={() => handleNavigate(value.name)}>
          <img src={value.icon} width="20" height="20" alt={value.name} />
        </FooterItem>
      ))}
    </FooterFromContainer>
  );
};

export default Footer;