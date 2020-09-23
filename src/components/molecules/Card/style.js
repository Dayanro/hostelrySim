import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary.ligthGrey};
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  border-radius: 2px;
  padding: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .textCard {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 12px;
    margin: 0px;
  }
`;

