import styled from "styled-components";

const Button = styled.button`
  font-family: "Nitty-Medium";
  margin: 8px;
  border-radius: 4px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.primary.blue};
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 16px 1px;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.primary.blue};
    color: ${({ theme }) => theme.primary.black};
    border: 1px solid ${({ theme }) => theme.primary.blue};
  }
  &:active:enabled {
    background-color: ${({ theme }) => theme.primary.black};
    color: ${({ theme }) => theme.primary.black};
    border: 1px solid ${({ theme }) => theme.primary.black};
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export default Button;