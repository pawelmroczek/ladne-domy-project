import styled, { css } from "styled-components";
import { SectionHeader } from "../styled";

export const InwestycjeHeader = styled.h2`
  text-align:center;
  font-weight:300;
  font-size:50px;
  padding:30px;
`

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const ButtonsContainer = styled.div`
  display:flex;
  justify-content:space-around;
  width:70%;
`

export const StyledButton = styled.button`
  background:none;
  cursor: pointer;
  border:none;
  color:gray;
  font-size:30px;
  &:hover{
    font-weight:bold;
    color:black;
  }

  ${({active})=>active && css`
    color:black;
  `}
`

export const SectionsContainer = styled.div`
  margin-top:2%;
  padding:5%;
  background-color:lightgray;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:60px;
  justify-content:center;
`