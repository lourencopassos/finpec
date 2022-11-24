import React from "react";

interface ProfitProps {
  profit: string;
  title: string;
}

export const Profit = ({ profit, title }: ProfitProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>
        Lucro atual:
        {profit}
      </p>
    </>
  );
};
