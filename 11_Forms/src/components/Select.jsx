const Select = ({label, name, id, error, ref, defaultOption, options = []}) => {
  return (
    <div className="container">
                <label htmlFor={id}>{label}</label>
                <select name={name} style={{ padding: "5px" }} className='montserrat-body' id={id}
                    // value={expense.category} onChange={(e) => {
                    //     setExpense((prev) => ({...prev, category: e.target.value}))
                    // }}
                    ref={ref}
                >
                    <option value="" hidden>{defaultOption}</option>
                    {options.map((value) => (
                        <option key={crypto.randomUUID()} value={value.toLowerCase()}>{value}</option>
                    ))}
                </select>
                <p>{error}</p>
            </div>
  )
}

export default Select
