import React, { useContext, useEffect, useState } from "react";
import { MOCK_CPRF_DATA } from "../../api/data";
import { CPRFTable } from "../../components/CPRFTable/CPRFTable";
import { CPRFTableHeader } from "../../components/CPRFTable/CPRFTableHeader/CPRFTableHeader";
import { FixedFilters } from "../../components/CPRFTable/FixedFilters/FixedFilters";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { AppContext } from "../../context";
import { ActionTypes } from "../../context/reducer";
import * as S from "./Dashboard.styles";

export const Dashboard = () => {
  const { dispatch } = useContext(AppContext);
  const [showCreateCPRFModal, setShowCreateCPRFModal] = useState(false);

  useEffect(() => {
    dispatch({ type: ActionTypes.INITIALIZE_CPRF, payload: MOCK_CPRF_DATA });
  }, [dispatch]);

  return (
    <S.Root>
      <Header />
      <S.Content>
        <FixedFilters setShowCreateCPRFModal={setShowCreateCPRFModal} />
        <CPRFTableHeader />
        <CPRFTable />
      </S.Content>
      {showCreateCPRFModal && (
        <S.Overlay>
          <Modal setShowModal={setShowCreateCPRFModal}>
            <Form setShowModal={setShowCreateCPRFModal} />
          </Modal>
        </S.Overlay>
      )}
    </S.Root>
  );
};
