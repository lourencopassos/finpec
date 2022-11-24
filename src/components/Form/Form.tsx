import React, { useContext, useState } from "react";
import { CPRF, CPRFType, CPRF_TYPE_OPTIONS } from "../../api/api.types";
import * as S from "./Form.styles";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../../context";
import { ActionTypes } from "../../context/reducer";
import { v4 as generateUUID } from "uuid";
import { addOneYear } from "../../utils/string-manipulation";

interface FormProps {
  setShowModal: (setShowModal: boolean) => void;
}

export const Form = ({ setShowModal }: FormProps) => {
  const { dispatch } = useContext(AppContext);

  const [type, setType] = useState(CPRF_TYPE_OPTIONS[0]);
  const [signedAmount, setSignedAmount] = useState<string>("");
  const [signedDate, setSignedDate] = useState(new Date());

  const handleSaveCprf = () => {
    const cprf: CPRF = {
      type: type.toLocaleLowerCase() as CPRFType,
      initialAmount: Number(signedAmount),
      signedDate: signedDate.toString(),
      id: generateUUID(),
      rate: 0.15,
      autoClosingDate: addOneYear(signedDate).toString(),
      status: "ativa",
    };

    dispatch({ type: ActionTypes.SAVE_CPRF, payload: cprf });
    setShowModal(false);
  };

  return (
    <S.Container>
      <S.Title>Criação de CPRF</S.Title>

      <S.ItemContainer>
        <S.Label htmlFor="type">Tipo</S.Label>
        <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
          {CPRF_TYPE_OPTIONS.map((type: string) => (
            <option>{type}</option>
          ))}
        </select>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.Label htmlFor="amount">Valor</S.Label>
        <input
          name="amount"
          id="amount"
          onChange={(e) => setSignedAmount(e.target.value)}
          value={signedAmount}
          type="number"
          step="0.01"
          min={5000}
        />
      </S.ItemContainer>
      <S.ItemContainer>
        <S.Label htmlFor="amount">Data de assinatura</S.Label>
        <DatePicker
          selected={signedDate}
          onChange={(date: Date) => setSignedDate(date)}
        />
      </S.ItemContainer>
      <button onClick={handleSaveCprf}>Salvar</button>
    </S.Container>
  );
};
