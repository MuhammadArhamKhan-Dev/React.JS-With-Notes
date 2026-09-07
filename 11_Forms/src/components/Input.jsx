const Input = ({label, name, id, error, ref, editValue}) => {
    return (
        <div className="container">
            <label htmlFor={id}>{label}</label>
            <input type="text" name={name} id={id}
                value={editValue} 
                // onChange={(e) => {
                //     setExpense((prev) => ({...prev, title: e.target.value}))
                // }}
                ref={ref}
            />
            <p>{error}</p>
        </div>
    )
}

export default Input
