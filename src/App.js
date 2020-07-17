import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
const initialExpenses = [
	{ id: uuid(), charge: 'rent', amount: 1600 },
	{ id: uuid(), charge: 'car payment', amount: 400 },
	{ id: uuid(), charge: 'credit card bill', amount: 1200 },
];
function App() {
	const [expenses, useExpenses] = useState(initialExpenses);
	console.log(expenses, 'aaaaaaa', useExpenses);
	return (
		<>
			<Alert />
			<h1>budget calculator</h1>
			<main className='App'>
				<ExpenseForm />
				<ExpenseList expenses={expenses} />
			</main>
			<h1>
				total spending:{' '}
				<span className='total'>
					${' '}
					{expenses.reduce((acc, curr) => {
						return (acc += curr.amount);
					}, 0)}
				</span>
			</h1>
		</>
	);
}

export default App;
