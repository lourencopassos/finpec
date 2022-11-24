import { CPRFType } from "../api/api.types";

export const humanizeCprfType = (type?: CPRFType) => {
  if (!type) return "";
  if (type === CPRFType.bullet) return "Bullet";
  if (type === CPRFType.cupom) return "Cupom";
  return "IPCA";
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (date?: string) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("pt-BR");
};

export const formatRate = (rate: number) => {
  return `${(rate * 100).toFixed(2)}%`;
};

export const formatMoney = (amount?: number) => {
  if (!amount) return "-";
  return `R$ ${amount.toFixed(2)}`;
};

export const addOneYear = (date: Date) => {
  date.setFullYear(date.getFullYear() + 1);
  return date;
};
