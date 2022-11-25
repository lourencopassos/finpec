import React, { useContext, useState } from "react";
import { CPRF } from "../../../api/api.types";
import { AppContext } from "../../../context";
import { ActionTypes } from "../../../context/reducer";
import { Overlay } from "../../../screens/Dashboard/Dashboard.styles";
import { calculateCurrentValue } from "../../../utils/rate-calculation";
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
  autoClosingDate,
}: CPRFItemProps) => {
  const { state, dispatch } = useContext(AppContext);
  const [showDetails, setShowDetails] = useState(false);
  const isActive = status === "ativa";

  const liquidateCPRF = (e: any, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const cprf = state.cprf.find((cprf) => cprf.id === id);
    if (cprf) {
      const cprfListToSave = state.cprf.filter((cprf) => cprf.id !== id);
      const closingAmount = calculateCurrentValue(
        cprf.signedDate,
        cprf.rate,
        cprf.initialAmount
      );
      const updatedCprf = {
        ...cprf,
        status: "liquidada",
        closingDate: new Date().toLocaleDateString("en-US"),
        closingAmount,
      };

      dispatch({
        type: ActionTypes.SET_CPRF,
        payload: [...cprfListToSave, updatedCprf],
      });
    }
  };

  return (
    <>
      <S.Container onClick={() => setShowDetails(true)}>
        <S.Item>
          {humanizeCprfType(type)}
          {isActive && (
            <S.LiquidateIcon onClick={(e) => liquidateCPRF(e, id)}>
              +
            </S.LiquidateIcon>
          )}
        </S.Item>
        <S.Item>{formatMoney(initialAmount)}</S.Item>
        <S.Item>{capitalize(status)}</S.Item>
        <S.Item>{formatDate(signedDate)}</S.Item>
        <S.Item>{formatDate(autoClosingDate)}</S.Item>
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
