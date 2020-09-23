import styled from "styled-components";

export const WrapperSearchBar = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  .searchWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.secondary.ligthPurple};
    box-sizing: border-box;
    line-height: 1.35;
    padding: 0;
    width: 85%;
    margin-top: 0%;
  }
`;



