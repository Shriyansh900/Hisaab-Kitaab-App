const Dashboard = ({ transactions }) => {



  const income = transactions.filter((transaction) => transaction.amount > 0).reduce((p,c)=> p + c.amount,0);
   const expense = transactions.filter((transaction) => transaction.amount < 0).reduce((p,c)=> p + c.amount,0);
   const balance = transactions.reduce((p,c)=> p + c.amount,0);
  // console.log(income);
  // console.log(expense);
  // console.log(balance);
  
  return (
      <div className="row g-3">
        <div className="col-md-4 col-sm-12">
          <div className="bg-success p-3">
            <h1 className="display-5 text-light">Income  </h1>
            <h1 className="display-6 text-light">{income}</h1>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="bg-danger p-3">
            <h1 className="display-5 text-light">Expense </h1>
            <h1 className="display-6 text-light">{expense}</h1>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="bg-warning p-3">
            <h1 className="display-5 text-light">Balance </h1>
            <h1 className="display-6 text-light">{balance}</h1>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
