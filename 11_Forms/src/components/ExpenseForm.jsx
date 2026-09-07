import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

const ExpenseForm = ({ setExpenses, editValue }) => {

    const titleRef = useRef()
    const categoryRef = useRef()
    const amountRef = useRef()

    const [errors, setErrors] = useState({})

        const validate = (formData) => {
            const errorData = {}

            if (!formData.title) {
                errorData.title = "Title is required!"
            }

            if (!formData.category) {
                errorData.category = "Please select a category!"
            }

            if (!formData.amount) {
                errorData.amount = "Please enter an amount!"
            }

            setErrors(errorData)
            return errorData
        }



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        if (Object.keys(validate(data)).length) return
        setExpenses((prev) => [...prev, {
            id: crypto.randomUUID(),
            title: titleRef.current.value,
            category: categoryRef.current.value,
            amount: amountRef.current.value
        }])
        //     setExpense({
        //     id: '',
        //     title: '',
        //     category: '',
        //     amount: ''
        // })
    }




    return (
        <form onSubmit={handleSubmit}>
            <Input label="Title" name="title" id="title" error={errors.title} ref={titleRef} editValue = {editValue} />
            <Select label="Category" name="category" id="category" error={errors.category} ref={categoryRef} defaultOption="Select a category" options={["Education", "Grocery", "Medicines", "Bills", "Clothes"]} />
            <Input label="Amount" name="amount" id="amount" error={errors.amount} ref={amountRef} />
            <div className="container">
                <input className='montserrat-body' type="submit" value="Add" />
            </div>
        </form>

    )
}

export default ExpenseForm
