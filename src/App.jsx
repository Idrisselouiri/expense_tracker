import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { HistoryList } from "./components/HistoryList";
import { AddTransaction } from "./components/AddTransaction";
import { ContextApi } from "./components/context/ContextApi";

export const App = () => {
  return (
    <div className="App">
      <ContextApi>
        <Header />
        <Balance />
        <IncomeExpense />
        <HistoryList />
        <AddTransaction />
      </ContextApi>
    </div>
  );
};
