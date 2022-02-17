import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=[
  {
    id: 1,
    title: "Car Insauance",
    amount:183,
    date: new Date(),
    
  },
  {
    id: 2,
    title: "Bike Insauance",
    amount:153,
    date: new Date(),
   
  },
];

const App = () => {

   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    })
  }
  
  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
  </div>
  );
};

export default App;
