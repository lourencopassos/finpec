import React from "react";
import * as S from "./Header.styles";

export const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Logo />
        <S.Heading>Carteira de investimentos</S.Heading>
      </S.LogoContainer>
    </S.Header>
  );
};
