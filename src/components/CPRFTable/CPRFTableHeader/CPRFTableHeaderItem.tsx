import React, { useContext } from "react";
import { AppContext } from "../../../context";
import { ActionTypes } from "../../../context/reducer";
import { order } from "../../../utils/ordering";
import * as S from "./CPRFTableHeader.styles";

interface CPRFTableHeaderItemProps {
  title: string;
  label: string;
}

export const CPRFTableHeaderItem = ({
  title,
  label,
}: CPRFTableHeaderItemProps) => {
  const { state, dispatch } = useContext(AppContext);

  const handleOnClick = (orderWay: "asc" | "desc") => {
    const orderedList = order(state.cprf, label, orderWay);
    dispatch({ type: ActionTypes.SET_CPRF, payload: orderedList });
  };

  return (
    <S.Item>
      {title}
      <S.Actions>
        <S.ArrowUp onClick={() => handleOnClick("asc")} />
        <S.ArrowDown onClick={() => handleOnClick("desc")} />
      </S.Actions>
    </S.Item>
  );
};
