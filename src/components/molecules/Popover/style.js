import styled from "styled-components";

export const PopoverWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary.ligthPurple};
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  position: absolute;
  left: 105%;
  border-radius: 5px;
  z-index: 1000;
  width: 40%;
  padding: 10px 12px;

  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 25%;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 16px solid ${({ theme }) => theme.secondary.ligthPurple};
    border-bottom: 13px solid transparent;
  }
`;
