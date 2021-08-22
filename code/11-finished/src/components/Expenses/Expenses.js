import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import  './ExpensesFilter.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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

  //Expenses listből jön
/*   let expensesContent = <p>No expenses found.</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.length > 0 && 
    filteredExpenses.map((expense) => (
    <ExpenseItem 
    //mindig kell key-t adni, mert hibára szalad (id v. index)
    key={expense.id}
    title={expense.title} 
    amount={expense.amount}
    date={expense.date}
    />))
  } */

  return (
    <div>
    <Card className="expenses">
                      {/*select alapérték beállítása */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* ha a feltétel teljesül, akkor az && második felét returnöli */}
{/*       {filteredExpenses.length === 0 && expensesContent}
      {filteredExpenses.length > 0 && 
      filteredExpenses.map((expense) => (
      <ExpenseItem 
      //mindig kell key-t adni, mert hibára szalad (id v. index)
      key={expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />))} */}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
