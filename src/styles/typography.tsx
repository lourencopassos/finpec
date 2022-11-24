import { css } from "styled-components";

export const regularFont = css`
  font-family: "Poppins", sans-serif;
  font-style: normal;
`;

export const _XL_Normal = css`
  ${regularFont};
  font-size: 18px;
  font-weight: normal;
`;

export const _5XL_Bold = css`
  ${regularFont};
  font-weight: bold;
  font-size: 40px;
`;

export const _4XL_Bold = css`
  ${regularFont};
  font-size: 28px;
  font-weight: bold;
`;

export const _XL_Bold = css`
  ${_XL_Normal};
  font-weight: bold;
`;

export const _L_Normal = css`
  ${regularFont};
  font-size: 16px;
  font-weight: normal;
`;
