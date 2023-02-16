// React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result.

// App.js
use { useState, useCallBack } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  
  // main point goes here
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  // the 2nd argument means that this function will be mounted when count is changed by the function of this 1st arguement
  return ( <Child /> )

}


// Child.js

const Child = () => {
    return ()
}
// main point goes here
export default React.memo(Child)
