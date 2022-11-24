import React, { useContext } from "react";
import { MOCK_CPRF_DATA } from "../../../api/data";
import { CPRF_TYPE_OPTIONS } from "../../../api/api.types";
import { AppContext } from "../../../context";
import { ActionTypes } from "../../../context/reducer";
import * as S from "./FixedFilters.styles";

interface FixedFiltersProps {
  setShowCreateCPRFModal: (setShowCreateCPRFModal: boolean) => void;
}

export const FixedFilters = ({ setShowCreateCPRFModal }: FixedFiltersProps) => {
  const { state, dispatch } = useContext(AppContext);

  const handleFilterByType = (type: string, property: string) => {
    const currentList = state.originalCPRFList as any[];

    if (type === "all") {
      dispatch({ type: ActionTypes.SET_CPRF, payload: MOCK_CPRF_DATA });
      return;
    }

    const filteredList = currentList.filter(
      (cprf) => cprf[property].toLowerCase() === type.toLowerCase()
    );
    dispatch({ type: ActionTypes.SET_CPRF, payload: filteredList });
  };

  return (
    <S.Container>
      <S.FilterContainer>
        <S.Label>Tipo</S.Label>
        <S.Select onChange={(e) => handleFilterByType(e.target.value, "type")}>
          <option value="all">Todos</option>
          {CPRF_TYPE_OPTIONS.map((type: string) => (
            <option key={type}>{type}</option>
          ))}
        </S.Select>
        <S.CreateNewCPRF onClick={() => setShowCreateCPRFModal(true)}>
          Criar nova CPRF
        </S.CreateNewCPRF>
      </S.FilterContainer>
    </S.Container>
  );
};
