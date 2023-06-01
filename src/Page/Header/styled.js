import styled from "styled-components";
import photo from "../../images/domdługa1.jpg"
import { css } from "styled-components";

export const StyledImage = styled.img`
  width:100%;
`

export const StyledHeader= styled.h1`
  position:absolute;
  margin:10%;
  margin-top:15%;
  padding:5%;
  background-color:${({theme})=>theme.colors.darkerFillter};
  color:white;
  font-weight:300;
`

export const Test = styled.div`
  position:absolute;
  
  margin-top:25%;
  margin-left:55.5%;
  background-color:white;
  width:12px;
  height:12px;
  border-radius:50%;
  box-shadow: 0px 0px 11px 6px rgba(244, 244, 244, 1);

  &:hover{
    box-shadow: 0px 0px 21px 11px rgba(244, 244, 244, 1);
  }

  
`

export const Linia = styled.div`
  display:none;
  margin-top:26.8%;
  transform: rotate(195deg);
  margin-left:56%;
  background-color:white;
  position:absolute;
  box-shadow: 0px 0px 11px 6px rgba(244, 244, 244, 1);
  width:10%;
  height:2px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: initial;
    `}

`