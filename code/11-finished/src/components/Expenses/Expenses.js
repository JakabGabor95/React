import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import  './ExpensesFilter.css';
import  './Expenses.css';

const Expenses = (props) => {
                                          //select alapérték beállítása
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);   
  } 

  //Szűrő tömb módosítás
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className="expenses">
                      {/*select alapérték beállítása */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expense) => 
      <ExpenseItem 
      //mindig kell key-t adni, mert hibára szalad (id v. index)
      key={expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />)} 
    </Card>
    </div>
  );
}

export default Expenses;
