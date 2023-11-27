import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/ContextApi";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addItem } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addItem(newTransaction);
  };
  return (
    <div className="AddTransaction">
      <h3>Add Transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <label className="text">Text</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter Text..."
        />
        <label>
          <p>Amount</p>
          <span>(negative-expense,positive-income)</span>
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter Amount..."
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};
