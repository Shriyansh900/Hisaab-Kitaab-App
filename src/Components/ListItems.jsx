const ListItems = ({ transaction , deleteTransaction , editTransaction}) => {
  // console.log(transaction);

  return (
    <li className="list-group-item rounded-0 ">
      {/* <p>{transaction.id}</p> */}
      <h1 className="display-6">{transaction.text}</h1>
      <h1>{transaction.amount}</h1>
      <span className="float-end ">
        <button className="btn btn-sm btn-warning mx-1 rounded-0" onClick={() =>editTransaction(transaction)}>Edit</button>
        <button className="btn btn-sm btn-danger mx-1 rounded-0" onClick={() =>deleteTransaction(transaction.id)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItems;
