import React, { useContext, useEffect, useState } from "react";
import { fetchSimulations } from "../../api/api";
import { CPRF, CPRFStatus, Simulation } from "../../api/api.types";
import { AppContext } from "../../context";
import { calculateCurrentProfit } from "../../utils/rate-calculation";
import {
  capitalize,
  formatDate,
  formatMoney,
  humanizeCprfType,
} from "../../utils/string-manipulation";
import * as S from "./Details.styles";
import { Profit } from "./Profit/Profit";

interface DetailsProps {
  id: string;
}

export const Details = ({ id }: DetailsProps) => {
  const [cprf, setCprf] = useState<CPRF | undefined>(undefined);
  const [simulations, setSimulations] = useState<Simulation | undefined>(
    undefined
  );
  const { state } = useContext(AppContext);
  const ipca_bullet = simulations?.ipca_bullet;
  const ipca_cupom = simulations?.ipca_cupom;
  const bullet = simulations?.bullet;

  useEffect(() => {
    const cprf = state.cprf.find((cprf) => cprf.id === id);
    if (cprf) {
      setCprf(cprf);
      const fetchData = async () => {
        const simulation = await fetchSimulations({
          amount: cprf.initialAmount,
          startDate: cprf.signedDate,
        });
        setSimulations(simulation);
      };
      if (cprf.status !== "liquidada") {
        fetchData();
      }
    }
  }, [id, state.cprf]);

  const { type, signedDate, initialAmount, status } = cprf || {};
  const ipcaBulletProfit = calculateCurrentProfit(
    signedDate as string,
    ipca_bullet?.rate as number,
    initialAmount as number
  );
  const bulletProfit = calculateCurrentProfit(
    signedDate as string,
    bullet?.rate as number,
    initialAmount as number
  );
  const cupomProfit = calculateCurrentProfit(
    signedDate as string,
    ipca_cupom?.rate as number,
    initialAmount as number
  );

  return (
    <S.Container>
      {!cprf ? (
        <p>Carregando detalhes...</p>
      ) : (
        <div>
          <h2>Detalhes</h2>
          <p>Tipo: {humanizeCprfType(type)}</p>
          <p>Valor Inicial: {formatMoney(initialAmount)}</p>
          <p>Data de assinatura: {formatDate(signedDate)}</p>
          <p>Status: {capitalize(status as CPRFStatus)}</p>
        </div>
      )}
      {simulations && cprf && (
        <div>
          <h2>Simulações</h2>
          <Profit profit={formatMoney(ipcaBulletProfit)} title="IPCA Bullet" />
          <Profit profit={formatMoney(bulletProfit)} title="Bullet" />
          <Profit profit={formatMoney(cupomProfit)} title="Cupom" />
        </div>
      )}
    </S.Container>
  );
};
