import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    //itt nyerjük ki a gyerekből az adatot
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
        };

    const startEditingHandler = () =>  {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {/* *ngIf isEditing | A gyerekben ez a func van meghívva */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && 
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpense;