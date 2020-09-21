import styled from "styled-components";

export const Wrapper = styled.div`
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
`;

export const Header = styled.div`
  grid-area: h;
  position: relative;
  height:100%;
`;
export const List = styled.div`
  grid-area: l;
  background-color: ${({ theme }) => theme.primary.ligthGrey};
`;
export const Map = styled.div`
  grid-area: m;
  background-color: #ff6f69;
  position: relative;
`;
export const Footer = styled.div`
  grid-area: f;
  background-color: ${({ theme }) => theme.secondary.ligthPurple};

`;

export const LabelWrapper = styled.div`
  background-image: url(/img/dishes.jpg);
  height: 22%;
  background-size: cover;
`;

// .container {
//     height: 100%; 
//     display: grid;
//     grid-gap: 3px;
//     grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
//     grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end]; 
// }

// .header {
//     grid-column: main;
// }

// .menu {}

// .content {
//     grid-area: content;
// }

// .footer {
//     grid-column: main;
// }