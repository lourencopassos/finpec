import styled from "styled-components";
import { mainColors } from "../../styles/colors";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${mainColors.neutralLight};
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
`;
