import logo from './logo.svg';
// import './App.css';
import ExpensesDisplay from './components/Expenses/ExpensesDisplay.js';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {  
      date   : new Date(2021, 2, 28),
      title  : 'Car Insurence',
      amount : 294.67
    },
    {  
      date   : new Date(2021, 2, 30),
      title  : 'New Desk (Wooden)',
      amount : 300.67
    }
  ];

  const addExpenseHandler = (receivedExpenses) => {
    console.log('App.js');
    console.log(receivedExpenses);
  
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NewExpense onAddExpense={addExpenseHandler}/>
          <ExpensesDisplay items={expenses}/>
      </header>
    </div>
  );
}

export default App;
