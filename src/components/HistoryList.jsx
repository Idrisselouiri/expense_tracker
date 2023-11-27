import React, { useContext } from "react";

import { GlobalContext } from "./context/ContextApi";
import { ListItem } from "./ListItem";
export const HistoryList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="HistoryList">
      <h4 className="hitory">HISTORY</h4>
      <hr />
      {transactions.map((transaction) => (
        <ul>
          <ListItem key={transaction.id} transaction={transaction} />
        </ul>
      ))}
    </div>
  );
};
