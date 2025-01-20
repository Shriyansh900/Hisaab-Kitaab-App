// import React from 'react'
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([
    // { id: 1, text: "Salary", amount: 500000 },
    // { id: 2, text: "Rent", amount: -50000 },
    // { id: 3, text: "Food", amount: -5000 },
    // { id: 4, text: "Entertainment", amount: -40000 },
    // { id: 5, text: "Dividend", amount: 10000 },
  ]);

  const [theme, setTheme] = useState(true , "LIght Theme");
  // const [text, setText] = useState("Dark Theme");
  // const [text] = useState("Dark Theme");

  // const [themetext, setThemetext] = useState("Light Theme");

  const themeChange = () => {
    setTheme(theme ? false : true);
  };

  const [edit, setEdit] = useState({ transaction: {}, isEdit: false });
  //Add Transaction
  const addTransaction = (text, amount) => {
    console.log(text, amount);

    setTransactions([
      { id: crypto.randomUUID(), text, amount },
      ...transactions,
    ]);
  };

  const updateTransaction = (shriyansh) => {
    setTransactions(
      transactions.map((item) => (item.id === shriyansh.id ? shriyansh : item))
    );
    setEdit({ transaction: {}, isEdit: false });
  };

  //Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const editTransaction = (transaction) => {
    console.log("sdfsdf");
    setEdit({ transaction: transaction, isEdit: true });
  };

  return (
    <>
      <Navbar themeChange={themeChange} theme={theme} />
      <div
        className={
          theme
            ? "container-fluid p-5 bg-light min-height"
            : "container-fluid p-5 bg-secondary min-height"
        }
      >
        <Form
          addTransaction={addTransaction}
          updateTransaction={updateTransaction}
          edit={edit}
        />
        <Dashboard transactions={transactions} />
        <ListGroup
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
};

export default App;
