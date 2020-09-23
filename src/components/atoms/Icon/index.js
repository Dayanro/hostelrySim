import styled from "styled-components";

const Icon = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  color:${({ theme }) => theme.primary.ligthGrey};
`;


export default Icon;