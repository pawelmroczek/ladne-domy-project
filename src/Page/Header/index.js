import { useState } from "react";
import { StyledImage, StyledHeader, Test, Linia } from "./styled";
import photo from "../../images/domdługa1.jpg";
import Pointer from "../Pointer";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const mouseEntered = () => {
    setOpen(true);
  };

  const mouseLeave = () => {
    setOpen(false);
  };

  return (
    <header>
      <StyledHeader>
        ŁADNE <br /> DOMY
      </StyledHeader>
      <Pointer
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta sequi distinctio quasi corporis officiis nulla! Consequatur corrupti odit ad doloremque autem accusantium dicta inventore, similique soluta ab, adipisci optio?"
        }
        positionY={25}
        positionX={55.5}
      />

      <StyledImage src={photo} />
    </header>
  );
};

export default Header;
