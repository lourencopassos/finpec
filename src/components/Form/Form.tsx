import React, { useContext, useEffect, useState } from "react";
import {
  CPRF,
  CPRFType,
  CPRF_TYPE_OPTIONS,
  Simulation,
} from "../../api/api.types";
import * as S from "./Form.styles";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../../context";
import { ActionTypes } from "../../context/reducer";
import { v4 as generateUUID } from "uuid";
import { fetchSimulations } from "../../api/api";
import { useDebounce } from "../../utils/hooks/useDebounce";

interface FormProps {
  setShowModal: (setShowModal: boolean) => void;
}

export const Form = ({ setShowModal }: FormProps) => {
  const { dispatch } = useContext(AppContext);

  const [type, setType] = useState(CPRF_TYPE_OPTIONS[0]);
  const [signedAmount, setSignedAmount] = useState<string>("");
  const [signedDate, setSignedDate] = useState(new Date());
  const [simulations, setSimulations] = useState<Simulation | undefined>(
    undefined
  );

  const debouncedValue = useDebounce(signedAmount);

  useEffect(() => {
    const fetchData = async () => {
      const simulation = await fetchSimulations({
        amount: Number(debouncedValue),
        startDate: signedDate.toLocaleDateString("en-US"),
      });
      setSimulations(simulation);
    };
    if (signedAmount && signedDate && Number(signedAmount) >= 5000) {
      fetchData();
    }
  }, [signedAmount, signedDate, debouncedValue]);

  const getRate = () => {
    const ipca_bullet = simulations?.ipca_bullet;
    const ipca_cupom = simulations?.ipca_cupom;
    const bullet = simulations?.bullet;

    if (simulations) {
      if (type === "Cupom") return ipca_cupom?.rate;
      if (type === "IPCA Bullet") return ipca_bullet?.rate;
      return bullet?.rate;
    }
    return;
  };

  const getEndDate = () => {
    const ipca_bullet = simulations?.ipca_bullet;
    const ipca_cupom = simulations?.ipca_cupom;
    const bullet = simulations?.bullet;

    if (simulations) {
      if (type === "Cupom") return ipca_cupom?.endDate;
      if (type === "IPCA Bullet") return ipca_bullet?.endDate;
      return bullet?.endDate;
    }
    return;
  };

  const rate = getRate();
  const hasRate = !!rate;

  const handleSaveCprf = () => {
    const cprf: CPRF = {
      type: type.toLocaleLowerCase() as CPRFType,
      initialAmount: Number(signedAmount),
      signedDate: signedDate.toString(),
      id: generateUUID(),
      rate: (rate as number) / 100,
      autoClosingDate: getEndDate() || "",
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
            <option key={type}>{type}</option>
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
      {rate && (
        <S.ItemContainer>
          <p>Taxa a ser aplicada: {rate}%</p>
        </S.ItemContainer>
      )}
      <button onClick={handleSaveCprf} disabled={!hasRate}>
        Salvar
      </button>
    </S.Container>
  );
};
