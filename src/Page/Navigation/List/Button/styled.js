import styled, { css } from "styled-components";

export const StyledButtonDiv = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  gap:10%;
  justify-content:center;
  flex-direction:column;
  padding-right:60%;
`;

export const UperLine = styled.div`
  width:80%;
  height:2%;
  border-radius:40px;
  background-color:gray;
  transition: width 0.3s;

  ${({isOpen})=> isOpen && css`
  width:120%;
  `}
  
`

export const MiddleLine= styled.div`
  width:60%;
  height:2%;
  border-radius:40px;
  background-color:gray;

  transition: width 0.3s;

  ${({isOpen})=> isOpen && css`
  width:100%;
  `}
`