import styled, {css} from "styled-components";

export const GalleryContainer = styled.div`
  padding-top:2%;
  padding-bottom:2%;
  display:flex;
  flex-wrap:wrap;
  
`

export const InfoDiv = styled.div`
  background-color:whitesmoke;
  color:black;
  text-align:center;
  padding:10px;
  flex-grow:3;
  border-bottom:1px solid gray;
  /* box-shadow: 0px 1px 11px 1px rgba(0, 0, 0); */
`

export const StyledImg = styled.img`
  width:33.33%;
  padding-top: ${({ paddingTop }) => paddingTop }%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom }%;
`