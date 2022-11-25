import React from "react";
import { CPRFTableHeaderItem } from "./CPRFTableHeaderItem";
import * as S from "./CPRFTableHeader.styles";

export const CPRFTableHeader = () => {
  return (
    <S.Container>
      <CPRFTableHeaderItem title="Tipo" label="type" />
      <CPRFTableHeaderItem title="Valor Inicial" label="initialAmount" />
      <CPRFTableHeaderItem title="Status" label="status" />
      <CPRFTableHeaderItem title="Data de Assinatura" label="signedDate" />
      <CPRFTableHeaderItem title="Data de fechamento" label="autoClosingDate" />
      <CPRFTableHeaderItem title="Taxa" label="rate" />
      <CPRFTableHeaderItem title="Data de Vencimento" label="closingDate" />
      <CPRFTableHeaderItem title="Valor no Vencimento" label="closingAmount" />
    </S.Container>
  );
};
