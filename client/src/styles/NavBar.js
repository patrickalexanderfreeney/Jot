import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: lightslategray;
`;

export const Logo = styled.p`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  margin: 0.5rem 1rem;
  padding: 1rem;
`;
