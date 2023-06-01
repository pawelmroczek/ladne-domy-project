import { StyledNav, Logo, Phone, StyledDiv } from "./styled";
import logo from "../../images/ladne-domy-logo.png";
import List from "./List";

const Navigation = () => (
  <StyledNav>
    <StyledDiv>
      <Logo src={logo} />
      <List />
    </StyledDiv>
    <Phone>tel. 509 029 000</Phone>
  </StyledNav>
);

export default Navigation;
