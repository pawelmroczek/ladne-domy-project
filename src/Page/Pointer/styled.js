import styled, { css } from "styled-components";

export const Punkt = styled.div`
  @keyframes pulsowanie {
    0% {
      box-shadow: 0px 0px 11px 6px rgba(244, 244, 244, 1);
    }
    50% {
      box-shadow: 0px 0px 15px 6px rgba(244, 244, 244, 1);
    }
    100% {
      box-shadow: 0px 0px 21px 11px rgba(244, 244, 244, 1);
    }
  }

  position: absolute;
  animation: pulsowanie 2s infinite;
  animation-direction: alternate;
  margin-top: ${({ marginY }) => marginY}%;
  margin-left: ${({ marginX }) => marginX}%;
  background-color: white;
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0px 21px 11px rgba(244, 244, 244, 1);
  }
`;

export const Linia = styled.div`
  display: none;
  transform: rotate(195deg);
  margin-top: ${({ marginY }) => marginY + 1.8}%;
  margin-left: ${({ marginX }) => marginX + 0.5}%;
  background-color: white;
  position: absolute;
  box-shadow: 0px 0px 11px 6px rgba(244, 244, 244, 1);
  width: 10%;
  height: 2px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: initial;
    `}
`;

export const Tekst = styled.div`
  display: none;
  position: absolute;
  box-shadow: 0px 0px 11px 6px rgba(244, 244, 244, 1);
  background-color: ${({ theme }) => theme.colors.darkerFillter};
  margin-top: ${({ marginY }) => marginY + 1.8}%;
  margin-left: ${({ marginX }) => marginX + 10.5}%;
  max-width: 20%;
  padding: 10px;
  color: white;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: initial;
    `}
`;
