import styled from "styled-components";

export const InputWrapper = styled.input`
  font-family: "Nitty-Medium";
  border-radius: 4px;
  font-size: 2rem;

  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 16px 1px;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.primary.ligthGrey};
    color: ${({ theme }) => theme.primary.black};
    border: 1px solid ${({ theme }) => theme.secondary.black};
  }
  &:active:enabled {
    background-color: ${({ theme }) => theme.primary.ligthGrey};
    color: ${({ theme }) => theme.primary.black};
    border: 1px solid ${({ theme }) => theme.secondary.black};
  }
  &:disabled {
    opacity: 0.3;
  }
`;
