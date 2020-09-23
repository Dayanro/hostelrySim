import styled from "styled-components";

export const TableMapWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: 60px auto 60px;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "m m m m m m m m m m m m"
    "c c c c c c c c c c c c";

  .mapHeader {
    grid-area: h;
    background-color: ${({ theme }) => theme.primary.ligthGrey};
  }
  .mapTable {
    grid-area: m;
    background-image: url("/img/Floor.png");
    background-size: 50%;
    position: relative;
    box-shadow: 13px 12px white;
    overflow: hidden;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.05), 0 6px 12px rgba(0, 0, 0, 0.12);
    div:first-of-type {
     overflow: unset;
   }
  }

  .mapControl {
    grid-area: c;
    background-color: ${({ theme }) => theme.primary.ligthGrey};

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

// export const Header = styled.div`
//   grid-column: main;
//   background-color: ${({ theme }) => theme.primary.ligthGrey};
// `;

// export const Map = styled.div`
//   grid-colum: content;
//   background-image: url("/img/Floor.png");
//   background-size: 50%;
//   position: relative;
//   box-shadow: 13px 12px white;
//   overflow: hidden;
//   box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.05), 0 6px 12px rgba(0, 0, 0, 0.12);

//   div:first-of-type {
//     overflow: unset;
//   }
// `;
// export const Control = styled.div`
//   grid-column: main;
//   background-color: ${({ theme }) => theme.primary.ligthGrey};

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;
