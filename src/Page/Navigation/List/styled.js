import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  width: 30%;
  cursor: pointer;
  
`;



export const StyledList = styled.ul`
  width:15%;
  display: none;
  padding: 0px;
  margin-top: 0px;
  list-style: none;
  background-color:white;
  border-radius:10px;
  z-index:3;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: initial;
      position: absolute;
    `}
`;

export const StyledItem = styled.li`
  width:100%;
  //border-bottom:1px solid black;
  border-radius:10px;
  text-align: center;
  padding: 30px;
  margin: 0;

  &:hover{
    font-weight:bolder;
   // border-bottom:2px solid black;
  }
`;
