const user = "Muhammad"

const h2 = <h2>Hello <b>{user}</b></h2>

const root = ReactDOM.createRoot(document.querySelector("#root"))

console.log(h2)

root.render(h2)