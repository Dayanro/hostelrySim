import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px 1fr 40px;
  grid-template-areas: 
      "h h h h "
      "l m m m "
      "f f f f ";
`;

export const Header = styled.div`
  grid-area: h;
  background-color: #96ceb4;
`;
export const List = styled.div`
  grid-area: l;
  background-color: #88d8b0;
`;
export const Map = styled.div`
  grid-area: m;
  background-color: #ff6f69;
`;
export const Footer = styled.div`
  grid-area: f;
  background-color: #ffcc5c;
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