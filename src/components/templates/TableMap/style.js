import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: [main-start] 1fr [content-end main-end];
  grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end];
`;

export const Header = styled.div`
  grid-column: main;
  background-color: #96ceb4;
`;

export const Map = styled.div`
  grid-colum: content;
  background-image: url("/img/Floor.png");
  background-size: 50%;
`;
export const Control = styled.div`
  grid-column: main;
  background-color: #ffcc5c;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

