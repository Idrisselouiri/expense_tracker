import React from "react";
import { GlobalContext } from "./context/ContextApi";
import { useContext } from "react";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc = acc + item), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc = acc + item), 0) * -(1).toFixed(2);

  return (
    <div className="IncomeExpense">
      <div className="income">
        <h3>Income</h3>
        <h4>${income}</h4>
      </div>
      <div className="border"></div>
      <div className="expense">
        <h3>Expense</h3>
        <h4>${expense}</h4>
      </div>
    </div>
  );
};
