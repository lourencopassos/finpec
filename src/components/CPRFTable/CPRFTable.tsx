import React, { useContext } from "react";
import { AppContext } from "../../context";
import { CPRFItem } from "./CPRFItem/CPRFItem";
import * as S from "./CPRFTable.styles";

export const CPRFTable = () => {
  const { state } = useContext(AppContext);
  const { cprf: cprfData } = state;

  return (
    <S.Container>
      {cprfData.map((cprf) => {
        return <CPRFItem {...cprf} key={cprf.id} />;
      })}
    </S.Container>
  );
};
