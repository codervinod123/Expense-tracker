import React from 'react';
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
      
    if(props.items.length===0)
    {
        return <h2 className="expense-list__falllback">Chala Ja bhosdk</h2>
    }
  return (
    <ul className="expense-list">
      { props.items.map((expenses)=>(
         <ExpenseItem
           key={expenses.id} 
           title={expenses.title}
           amount={expenses.amount}
           date={expenses.date}
         />
       ))};
    </ul>
  )
}

export default ExpensesList