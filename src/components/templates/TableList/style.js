import styled from "styled-components";

export const WrapperTableList = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: auto auto 1fr;

  padding: 10px 1px;
  height: 100%;
  box-sizing: border-box;

  .menuWrapper {
    grid-row: 1/2;
  }
  .searchWrapper {
    grid-row: 2/3;
  }
  .listWrapper {
    grid-row: 3/4;
    height: 100%;
    overflow-y: scroll;
  }
`;




