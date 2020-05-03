import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 9vh;
  background-color: transparent;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.p`
  font-family: 'Josefin Slab', serif;
  font-size: 2rem;
  text-decoration: none;
  color: #696969;
  margin: 0rem 0 0.5rem 2rem;
  padding: 1rem;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 35px;
  margin: 1rem 0 0.5rem 2rem;
  position: absolute;
  left: 0;
`;
export { Nav, Logo, LogoImg }