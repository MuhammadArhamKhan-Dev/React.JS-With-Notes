import React, { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import ContextMenu from './ContextMenu'

const ExpenseTable = ({ expenses, setExpenses }) => {

  const [result, setQuery] = useFilter(expenses, (data) => data.category)
  const total = result.reduce((acc, cur) => acc + cur.amount, 0)
  const [menuPosition, setMenuPosition] = useState({})
  const [disp, setDisp] = useState({display: "none"})
  const [row, setRow] = useState('')

  return (
    <>
    <ContextMenu menuPosition = {menuPosition} menuDisplay={disp} setDisp = {setDisp} setExpenses = {setExpenses} row={row} />
    <table className='montserrat-body' onClick={() => {
      setDisp({display: "none"})
    }}>
      <thead>
        <tr>
          <th>Title</th>
          <th><select onChange={(e) => {setQuery(e.target.value.toLowerCase())}} style={{ fontWeight: 700 }} className='montserrat-body' name="" id="">
            <option value="">All</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicines">Medicines</option>
          </select>
          </th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          result.map((expense) => (<tr key={expense.id} onContextMenu={(e) => {
            e.preventDefault()
            setDisp({display: "flex"})
            setMenuPosition({left: e.clientX + 10, top: e.clientY + 5})
            setRow(expense.id)
          }}>
            <td>{expense.title}</td>
            <td>{expense.category}</td>
            <td>
              {expense.amount}
            </td>
          </tr>))
        }
        <tr>
          <td><b>Total</b></td>
          <td></td>
          <td><b>{total}R.s</b></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}



export default ExpenseTable
