import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] =useState('')
    useEffect(() => {
        document.title = `component updated ${count} times`
        console.log('updating...')
    })
    return (
        <div>
            <div>Count: { count }</div>
            // when we enter some text in this input, clg from useEffect is logging all the time, to prevent that, use the second paramenter
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
        </div>
    )
}

export default UseEffect

// the second parameter for conditionally run the effects
useEffect(() => {
    document.title = `component updated ${count} times`
    console.log('updating...')
}, [count]) 

// this mean that useEffect will be run when the count value is changed 
