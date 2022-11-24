import React, { useState } from "react";
import { CPRF } from "../../../api/api.types";
import { Overlay } from "../../../screens/Dashboard/Dashboard.styles";
import {
  capitalize,
  formatDate,
  formatRate,
  formatMoney,
  humanizeCprfType,
} from "../../../utils/string-manipulation";
import { Details } from "../../Details/Details";
import { Modal } from "../../Modal/Modal";
import * as S from "./CPRFItem.styles";

type CPRFItemProps = CPRF;

export const CPRFItem = ({
  type,
  status,
  signedDate,
  rate,
  initialAmount,
  closingDate,
  closingAmount,
  id,
}: CPRFItemProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <S.Container onClick={() => setShowDetails(true)}>
        <S.Item>{humanizeCprfType(type)}</S.Item>
        <S.Item>{formatMoney(initialAmount)}</S.Item>
        <S.Item>{capitalize(status)}</S.Item>
        <S.Item>{formatDate(signedDate)}</S.Item>
        <S.Item>{formatRate(rate)} ao ano</S.Item>
        <S.Item>{formatDate(closingDate)}</S.Item>
        <S.Item>{formatMoney(closingAmount)}</S.Item>
      </S.Container>
      {showDetails && (
        <Overlay>
          <Modal setShowModal={setShowDetails}>
            <Details id={id} />
          </Modal>
        </Overlay>
      )}
    </>
  );
};
