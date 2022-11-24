import styled from "styled-components";
import { _4XL_Bold } from "../../styles/typography";
import { FinPecLogo } from "../../assets/images/FinPecLogo";
import { mainColors } from "../../styles/colors";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background: ${mainColors.white};
  padding: 0.5rem 0;
`;

export const Heading = styled.h1`
  ${_4XL_Bold};
  margin-left: 40px;
`;

export const Logo = styled(FinPecLogo)`
  width: 100px;
  height: 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
