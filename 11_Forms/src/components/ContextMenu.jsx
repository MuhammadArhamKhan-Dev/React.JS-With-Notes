const ContextMenu = ({menuPosition, menuDisplay, setDisp, setExpenses, row}) => {
  return (
    <div className="contextMenu" style={{ ...menuPosition, ...menuDisplay }}>
      <div onClick={() => {
        setDisp({display: "none"})
      }}>Edit</div>
      <div onClick={() => {
        setDisp({display: "none"})
        setExpenses((prev) => prev.filter((expense) => expense.id != row))
      }}>Delete</div>
    </div>
  )
}

export default ContextMenu
