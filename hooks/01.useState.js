import { useState } from "react"

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default UseStateHook


// # rules of hook
// ## only call hooks at the top level
// - don't call hook inside loops, condtions, or nested functions
// ## only call hooks from react functions
// - call them from within react functional components and not just any regular js functions
