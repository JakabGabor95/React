import React, { useState }  from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    //van default event paramétere
    const titleChangeHandler = (event) => {
        //input mező értéke
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);

        //felülírja a userinput adott kulcson lévő értékét
      /*   setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }) */
        
        //garantálja az utolsó state állapot visszaadását az inputban
       /*  setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }) */
    };

    const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value);
       /*  setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }) */
    }

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }) */
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        //propson keresztül megkapja a szülőből a kezelő functiont
        props.onSaveExpenseData(expenseData);
        //reseteli az input valuet
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit = {submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                 <label>Title</label>
                 {/* INPUT-ban lévő változtatásokra fut le */}
                 <input 
                 type="text" 
                 //Two way binding
                 value={enteredTitle} 
                 onChange = {titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                 <label>Amount</label>
                 <input 
                 type="number" 
                 min="0.01" 
                 step="0.01"
                 value={enteredAmount}
                 onChange = {amountChangeHandler}/>
            </div>     
            <div className="new-expense__control">
                 <label>Date</label>
                 <input 
                 type="date"
                 min="2019-01-01" 
                 max="2022-12-31" 
                 value={enteredDate}
                 onChange = {dateChangeHandler}/>
            </div>     
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
        </div>
    </form>
};

export default ExpenseForm;