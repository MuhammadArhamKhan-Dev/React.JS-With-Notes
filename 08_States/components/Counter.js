import { useState } from "react"

const Counter = () => {

    const [count ,setCount] = useState(0)

    // const myStateArr = useState(0)
    // const count = myStateArr[0]
    //const setCount = myStateArr[1]
  return (
    <>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={()=> {
        setCount(count + 1)
      }}>Count</button>
    </>
  )
}

export default Counter