import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary.ligthPurple};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 4;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0px;
    color: #fff;
    line-height: 30px;
    padding-top: 5px;
    box-sizing: border-box;
  }
`;

