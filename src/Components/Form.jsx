import { useEffect, useState } from "react";

const Form = ({ addTransaction, edit , updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    !edit.isEdit ? 
    addTransaction(text, parseInt(amount)): updateTransaction ({id: edit.transaction.id , text : text , amount : +amount}),

    setText("");
    setAmount("");
  };


  useEffect(() => {
    console.log(edit);
    setAmount(edit.transaction.amount), setText(edit.transaction.text);
  }, [edit]);
  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Transaction"
        className="form-control w-100 rounded-0"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        className="form-control w-100 rounded-0"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-success w-100 rounded-0">
        Save Transaction
      </button>
    </form>
  );
};

export default Form;
