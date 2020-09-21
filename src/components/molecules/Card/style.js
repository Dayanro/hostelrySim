import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary.ligthGrey};
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  border-radius: 2px;
  padding: 10px;
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImagenWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary.blue};
`;
export const Text = styled.p`

`;

export const TextWrapper = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 12px;
  margin: 0px;
`;
