import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './components/expenseData'

function App() {

  const [expenses, setExpenses] = useState(expenseData)
  const [editValue, setEditValue] = useState('')

  return (
    <>
      <main className='montserrat-body'>
        <section className='mainSection'>
          <div className="left">
            <h1>Track Your Expense</h1>
            <ExpenseForm setExpenses = {setExpenses} editValue = {editValue} />
          </div>
          <div className="right">
            <ExpenseTable expenses = {expenses} setExpenses = {setExpenses} editValue = {editValue} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
