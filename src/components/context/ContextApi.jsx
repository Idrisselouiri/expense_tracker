import React, { createContext, useReducer } from "react";
import reducer from "../context/UseReducer";
const initialState = {
  transactions: [
    { id: 1, text: "phone", amount: 2000 },
    { id: 2, text: "phone", amount: -500 },
    { id: 3, text: "phone", amount: -20 },
  ],
};
export const GlobalContext = createContext(initialState);
export const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function deleteItem(id) {
    dispatch({
      type: "delete_item",
      payload: id,
    });
  }
  function addItem(transaction) {
    dispatch({
      type: "add_item",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteItem, addItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
