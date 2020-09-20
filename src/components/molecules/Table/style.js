import styled from "styled-components";

export const TableWrapper = styled.div`
  background-image: url("/img/darkStone.jpg");
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  position: absolute;
  width: 50px;
  height: 50px;
  left: ${(props) => props.posX}px;
  top: ${(props) => props.posY}px;
  border-radius: 5px;
  padding: 10px 12px;
`;


