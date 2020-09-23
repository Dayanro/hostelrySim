import styled from "styled-components";

export const PopoverWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary.ligthBlue};
  box-shadow: 0px 0px 45px rgb(10 10 75 / 24%);
  position: absolute;
  left: 47%;
  top: 105%;
  border-radius: 5px;
  z-index: 1000;
  width: 46%;
  height: 75px;
  &:before {
    content: "";
    right: 12%;
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 15px solid ${({ theme }) => theme.primary.blue};
    bottom: 100%;
  }
  .textPopover{
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 12px;
    margin: 0px;
    color: ${({ theme }) => theme.primary.ligthGreen};
    padding: 6px;
  }

  .frame {
    background-color: ${({ theme }) => theme.primary.blue};
    height: 39%;
    border-radius: 5px 5px 0px 0px;
  }
`;
