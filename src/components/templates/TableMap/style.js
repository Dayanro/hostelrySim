import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: [main-start] 1fr [content-end main-end];
  grid-template-rows: [main-start] 60px [content-start] auto [content-end] 50px [main-end];
`;

export const Header = styled.div`
  grid-column: main;
  background-color: ${({ theme }) => theme.primary.ligthGrey};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const Map = styled.div`
  grid-colum: content;
  background-image: url("/img/Floor.png");
  background-size: 50%;
  position: relative;
  box-shadow: 13px 12px white;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.05), 0 6px 12px rgba(0, 0, 0, 0.12);
`;
export const Control = styled.div`
  grid-column: main;
  background-color: ${({ theme }) => theme.primary.ligthGrey};
 
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

