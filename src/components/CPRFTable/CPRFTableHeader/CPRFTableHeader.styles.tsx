import styled from "styled-components";
import { IconArrow } from "../../../assets/icons/ArrowIcon";
import { mainColors } from "../../../styles/colors";

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 90%;
  border-radius: 20px;
  height: auto;
  background: ${mainColors.white};
  display: flex;
  padding: 1rem 0;
  > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const Item = styled.div`
  width: 14%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowUp = styled(IconArrow)``;

export const ArrowDown = styled(ArrowUp)`
  transform: scaleY(-1);
`;

export const Actions = styled.div`
  display: flex;
  margin-left: 4px;
  x svg {
    margin-right: 2px;
  }

  > *:not(:last-child) {
    margin-right: 4px;
  }
`;
