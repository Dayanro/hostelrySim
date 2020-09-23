import styled from "styled-components";

export const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary.ligthGrey};
  display: flex;
  justify-content: space-between;
  padding: 1px 30px;
  align-items: center;
  height: 100%;

  .dataWrapper {
  display: flex;
  }
`;

