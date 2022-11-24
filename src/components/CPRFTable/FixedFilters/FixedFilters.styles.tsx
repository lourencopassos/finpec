import styled from "styled-components";
import { mainColors } from "../../../styles/colors";
import { _XL_Bold } from "../../../styles/typography";

export const Container = styled.div`
  margin-bottom: 0.5rem;
  width: 90%;
  border-radius: 20px;
  background: ${mainColors.white};
  display: flex;
  justify-content: center;
`;

export const Label = styled.p`
  margin-right: 0.5rem;
`;

export const FilterContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  height: 50%;
`;

export const CreateNewCPRF = styled.p`
  margin-left: 1rem;
  ${_XL_Bold};
  color: ${mainColors.link};
  cursor: pointer;
`;
