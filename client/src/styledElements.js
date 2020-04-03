import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: grey;
`;

export const Logo = styled.p`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  margin: 0.5rem 1rem;
  padding: 1rem;
`;
export const section = styled.section`
  height: 90vh;
`;
export const Button = styled.a`
  height: 48px;
  line-height: 48 px;
  padding: 10px 34px;
  font-weight: 600;
  border-radius: 100px;
  color: white;
  background: blue;
  margin: 0 24px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background: gray;
  }

  ${props =>
    props.outlined &&
    css`
      background: transparent;
      border: 3px solid black;
    `}
`;
export const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const Card = styled.div`
  /* padding: 20px; */
`;
