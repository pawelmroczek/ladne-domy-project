import { useState } from "react";
import { StyledList, StyledItem, StyledDiv, StyledListButton } from "./styled";
import Button from "./Button";

const List = () => {
  const [isOpen, setOpen] = useState(false);

  const mouseEntered = () => {
    setOpen(true);
  };

  const mouseLeave = () => {
    setOpen(false);
  };

  return (
    <StyledDiv onMouseEnter={mouseEntered} onMouseLeave={mouseLeave}>
      <Button isOpen={isOpen}></Button>
      <StyledList isOpen={isOpen}>
        <StyledItem>INWESTYCJE</StyledItem>
        <StyledItem>KONTAKT</StyledItem>
        <StyledItem>ZDJĘCIA</StyledItem>
      </StyledList>
    </StyledDiv>
  );
};

export default List;
