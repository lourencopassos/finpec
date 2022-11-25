import { formatMoney } from "./string-manipulation";

// constants
const MILLISECONDS = 1000;
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;

export const calculateCurrentProfit = (
  signedDate: string,
  rate: number,
  initialAmount: number
) => {
  const dayDifference = getDaysDifference(signedDate);
  const daysInAYear = 365;
  const calculatedRate =
    ((rate * 0.01) / daysInAYear) * dayDifference * initialAmount;
  return calculatedRate;
};

export const getDaysDifference = (signedDate: string) => {
  const today = new Date();
  const dateOfSignature = new Date(signedDate);
  const dayDifference = Math.abs(today.getTime() - dateOfSignature.getTime());
  return Math.ceil(dayDifference / (MILLISECONDS * SECONDS * MINUTES * HOURS));
};

export const calculateCurrentValue = (
  signedDate: string,
  rate: number,
  initialAmount: number
) => {
  const profit = calculateCurrentProfit(signedDate, rate, initialAmount);
  return profit + initialAmount;
};
