import styled, { css } from 'styled-components';

export const section = styled.section`
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Card = styled.div`
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled.div`
  padding: 2px 16px;
`;
