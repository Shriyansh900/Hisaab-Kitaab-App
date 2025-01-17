import ListItems from "./ListItems";

const ListGroup = ({ transactions , deleteTransaction , editTransaction }) => {
  // console.log(transactions);

  return (
    <ul className="list-group my-3">
      {transactions.map((transaction) => (
        <ListItems transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>
      ))}
    </ul>
  );
};

export default ListGroup;
