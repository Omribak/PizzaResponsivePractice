import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderContainer = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./pizza-bg-img-large.jpg');
  background-size: cover;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7rem;
  height: 40vh;
`;

const Logo = styled.img`
  width: 10vw;
  margin-left: 5rem;

  @media only screen and (max-width: 800px) {
    width: 17vw;
  }

  @media only screen and (max-width: 500px) {
    width: 30vw;
  }
`;

const SocialIcons = styled.div`
  color: white;
  font-size: 2rem;
  display: flex;
  gap: 2rem;
  margin-right: 7rem;
`;

const HamburgerMenuIcon = styled.div`
  color: white;
  font-size: 2.5rem;
  display: none;
`;

export default function Header() {
  return (
    <HeaderContainer className="header-container">
      <Logo src="./logo.png" />
      <Navbar className="navbar" />
      <SocialIcons className="social-icons">
        <FaTiktok />
        <FaFacebook />
        <FaInstagram />
      </SocialIcons>
      <HamburgerMenuIcon className="hamburger-menu">
        <GiHamburgerMenu />
      </HamburgerMenuIcon>
    </HeaderContainer>
  );
}
