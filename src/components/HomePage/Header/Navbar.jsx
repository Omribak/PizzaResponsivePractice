import React from 'react';
import styled from 'styled-components';

const NavbarItemsArray = ['MENU', 'CONTACT', 'HIRING'];

const NavbarContainer = styled.div`
  display: flex;
  color: white;
  gap: 2rem;
`;

const NavbarItem = styled.p`
  color: white;
  font-size: 1.5rem;
`;

export default function Navbar() {
  return (
    <NavbarContainer className="navbar-container">
      {NavbarItemsArray.map((item) => (
        <NavbarItem>{item}</NavbarItem>
      ))}
    </NavbarContainer>
  );
}
