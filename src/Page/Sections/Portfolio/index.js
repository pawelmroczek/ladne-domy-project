import { SectionHeader } from "../styled";
import {
  HeaderText,
  MainContainer,
  HeaderContainer,
  StyledButton,
  ButtonLine,
  ButtonContainer,
} from "./styled";
import Gallery from "./Gallery";
import { useState } from "react";
import photos from "./Gallery/photos";

const Portfolio = () => {
  const [pageCounter,setPageCounter] = useState(0);
  

  const moveForward = () =>{
   

    if(pageCounter<photos.length -1){
      setPageCounter((pageCounter)=>pageCounter+1)
    }else{
      setPageCounter(0);
    }
  }

  const moveBackward = () =>{
    if(pageCounter>0){
      setPageCounter((pageCounter)=>pageCounter-1)
    }else{
      setPageCounter(photos.length -1);
    }
  }

  return(
  <>
    <MainContainer>
      <HeaderContainer>
        <SectionHeader>Nasza praca.</SectionHeader>
        <HeaderText>Design i innowacyjne rozwiązania</HeaderText>
      </HeaderContainer>
      <ButtonContainer>
        <StyledButton onClick={moveBackward}>&lt;</StyledButton>
        <ButtonLine></ButtonLine>
        <StyledButton onClick={moveForward}>&gt;</StyledButton>
      </ButtonContainer>
    </MainContainer>
    <Gallery counter={pageCounter} />
  </>
)};

export default Portfolio;
