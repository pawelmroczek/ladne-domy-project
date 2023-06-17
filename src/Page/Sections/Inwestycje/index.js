import { SectionHeader } from "../styled";
import { InwestycjeHeader, MainContainer, ButtonsContainer,StyledButton ,SectionsContainer} from "./styled";
import Section from "./Section";
import Aktualne from "./aktualne";


const Inwestycje = () =>(
  <section>
    <InwestycjeHeader>INWESTYCJE </InwestycjeHeader>
    <MainContainer>
      <ButtonsContainer>
        <StyledButton active={true}>AKTUALNE</StyledButton>
        <StyledButton>NADCHODZĄCE</StyledButton>
      </ButtonsContainer>
      <SectionsContainer>
        {Aktualne.map(aktualne =>(
          <Section location={aktualne.lokalizacja} endTime={aktualne.data}/>
        ))}
      </SectionsContainer>
    </MainContainer>
  </section>

)

export default Inwestycje