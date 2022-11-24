import axios from "axios";

export const fetchSimulations = async ({
  startDate,
  amount,
}: {
  startDate: string;
  amount: number;
}) => {
  const API_URL = "https://api.qa.finpec.agr.br/financial/simulationCpr";
  try {
    const { data } = await axios.post(API_URL, {
      date_start: startDate,
      amount_cpr: amount,
    });
    return data;
  } catch (error) {
    return [];
  }
};
