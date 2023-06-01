import { SectionHeader } from "../styled";
import { HeaderText , MainContainer, HeaderContainer, StyledButton, ButtonLine,ButtonContainer} from "./styled";


const Portfolio = () => (
  <MainContainer>
    <HeaderContainer>
      <SectionHeader>Nasza praca.</SectionHeader>
      <HeaderText>Design i innowacyjne rozwiązania</HeaderText>
    </HeaderContainer>
    <ButtonContainer>
      <StyledButton>&lt;</StyledButton>
      <ButtonLine></ButtonLine>
      <StyledButton>&gt;</StyledButton>
    </ButtonContainer>
    
  </MainContainer>
);

export default Portfolio;
