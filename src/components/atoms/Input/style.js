import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 100%;
  height: 65px;
  border: 0;
  font-size: 25px;
  box-shadow: none;
  appearance: none;
  line-height: 47px;
  font-weight: 300;
  color: #202430;
  font-family: "Roboto", sans-serif;
  outline: none;
  vertical-align: baseline;
  box-sizing: border-box;
  
  background: ${({ theme }) => theme.primary.ligthGrey};

  &:hover:enabled {
    background-color: ${({ theme }) => theme.primary.ligthGrey};
    color: ${({ theme }) => theme.primary.black};
  }
  &:active:enabled {
    background-color: ${({ theme }) => theme.primary.ligthGrey};
    color: ${({ theme }) => theme.primary.black};
  }
  &:disabled {
    opacity: 0.3;
  }
`;
