import { useState } from "react";
import { Linia, Punkt, Tekst } from "./styled";

const Pointer = ({ text, positionX, positionY }) => {
  const [isOpen, setOpen] = useState(false);

  const mouseEntered = () => {
    setOpen(true);
  };

  const mouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <Linia marginX={positionX} marginY={positionY} isOpen={isOpen}></Linia>
      <Punkt
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeave}
        marginX={positionX}
        marginY={positionY}
      ></Punkt>
      <Tekst marginX={positionX} marginY={positionY} isOpen={isOpen}>
        {text}
      </Tekst>
    </>
  );
};

export default Pointer;
