import styled from "styled-components";

const Label = styled.div`
  font-family: Roboto, sans-serif;
  letter-spacing: normal;
  text-transform: inherit;
  color: #c7c4c7;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.5;
  opacity: 4.8;
  z-index: 1000;
  margin-right: 28px;
  margin-left: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.primary.blue};
`;

export default Label;
