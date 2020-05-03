import React from 'react';
import { Nav, LogoImg } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';
const NavBar = (props) => {
  return (
    <>
      <Nav>
        <LogoImg src={LogoSrc}></LogoImg>
      </Nav>
    </>
  );
};

export default NavBar;
