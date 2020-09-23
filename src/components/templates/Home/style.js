import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: 60px auto 40px;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "l m m m m m m m m m m m"
    "f f f f f f f f f f f f";

  .header {
    grid-area: h;
    position: relative;
    height: 100%;
  }

  .list {
    grid-area: l;
    background-color: ${({ theme }) => theme.primary.ligthGrey};
  }

  .map {
    grid-area: m;
  }
  
  .footerBottom {
    grid-area: f;
  }
`;
