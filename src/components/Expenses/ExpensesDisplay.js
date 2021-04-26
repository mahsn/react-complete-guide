import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpensesDisplay.css';

const ExpensesDisplay = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')
   
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseItem 
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem 
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            />
        </Card>
    )
}

export default ExpensesDisplay
