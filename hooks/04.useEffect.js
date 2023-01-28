import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `component is updated ${count} times`
    })
    return (
        <div>
            <div>Count: { count }</div>
            <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
        </div>
    )
}

export default UseEffect


// Description
// - we use useEffect hook for the replacement of componentDidMount, componentDidUpdate
