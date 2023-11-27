import { useContext } from "react";
import { GlobalContext } from "./context/ContextApi";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);
  return (
    <div className="balance">
      <p>YOUR BALANCE</p>
      <h1>${total}</h1>
    </div>
  );
};
