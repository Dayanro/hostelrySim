import styled from "styled-components";

export const TableWrapper = styled.div`
  background-image: url("/img/darkStone.jpg");
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  position: relative;
  width: 50px;
  height: 50px;
  color:white;

      @media (max-width: 600px) {
    display:none;
`;

export const MainTableWrapper = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.posX}px;
  top: ${(props) => props.posY}px;
`;

export const TextWrapper = styled.p`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 77%;
  left: 50%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;


