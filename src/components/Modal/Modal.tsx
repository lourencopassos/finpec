import React, { useRef } from "react";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
import * as S from "./Modal.styles";

interface ModalProps {
  setShowModal: (setShowModal: boolean) => void;
  children: JSX.Element;
}

export const Modal = ({ setShowModal, children }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setShowModal(false));

  return <S.Container ref={ref}>{children}</S.Container>;
};
