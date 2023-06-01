import { StyledButtonDiv, UperLine, MiddleLine } from "./styled";

const Button = ({isOpen}) =>{
  


  return  (
    <StyledButtonDiv >
      <UperLine isOpen={isOpen}></UperLine>
      <MiddleLine isOpen={isOpen}></MiddleLine>
    </StyledButtonDiv>
  );
}

export default Button;
