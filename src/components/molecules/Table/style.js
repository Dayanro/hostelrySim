import styled from "styled-components/macro";

export const MainTableWrapper = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.posX}px;
  top: ${(props) => props.posY}px;

  .tableWrapper {
    background-image: url("/img/woody.jpg");
    box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
    position: relative;
    width: 50px;
    height: 50px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .textWrapper {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 105%;
    left: 34%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
  }

  .tableId{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    align-items: center;
    background-color: #3f414e;
    color: #f5f5f5;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
`;



