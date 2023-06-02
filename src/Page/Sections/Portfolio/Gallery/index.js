import { GalleryContainer, StyledImg, InfoDiv } from "./styled"
import photos from "./photos"
import { useState } from "react"

const Gallery = ({counter, buttonClick, setButtonClick}) => (
  <GalleryContainer buttonClick={buttonClick}>
    <StyledImg paddingTop={0} paddingBottom={0} src={photos[counter][0]}/>
    <StyledImg paddingTop={0} paddingBottom={0} src={photos[counter][1]}/>
    <StyledImg paddingTop={0} paddingBottom={0}src={photos[counter][2]}/>
    <InfoDiv>{photos[counter][3]}</InfoDiv>
  </GalleryContainer>
  
)

export default Gallery