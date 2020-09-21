import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary.black};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 4;
`;
