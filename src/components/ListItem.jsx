import React, { useContext } from "react";
import { GlobalContext } from "./context/ContextApi";

export const ListItem = ({ transaction }) => {
  const { deleteItem } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "border-red" : "border-green"}>
      <p>{transaction.text}</p>
      <a>
        {sign}${Math.abs(transaction.amount)}
      </a>
      <button onClick={() => deleteItem(transaction.id)} className="btn-remove">
        delete
      </button>
    </li>
  );
};
