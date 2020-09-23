import styled from "styled-components";

export const NavLinkWrapper = styled.section`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  box-sizing: border-box;

  .navWrapper {
    color: #495057;
    background-color: #f5f5f5;
    border-color: #dee2e6 #dee2e6 #fff;
    border: 1px solid #dee2e6;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: -1px;
    width: 119px;
    height: 55px;
    border-bottom: unset;
  }
  .linkWrapper {
    flex: 1 1 auto;
    text-align: center;
    margin-bottom: -1px;
    box-sizing: border-box;
    display: block;
    list-style: none;
  }
`;



