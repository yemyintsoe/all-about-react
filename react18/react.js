/* ===== 01.INSTALLATION ===== */
> npm install -g npx
> npx create-react-app react-demo
or
> npm create vite@latest

/* ===== 02.FUNCTIONAL COMPONENT WITH PROPS ===== */
// components/Greet.js
export const Greet = (props) => {
    return(
        <div>
            <h1>Hello {props.name} - {props.age}</h1>
            {props.children}
        </div>
    )
}

// App.js
import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="YMS" age="25" />
      <Greet name="WILLIAM" age="20" />
      <Greet name="JOHN" age="26">
        <p>what the hell is that bro ... </p>
      </Greet>
    </div>
  );
}

/*
Notes: 
- props are immutable that means they cannot be modified
*/


/* ===== 03. STATE ===== */
// components/Message.js
import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState('Hello Guys')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Hello Girls')}>Change</button>
        </div>
    )
}
/*
Note:
props vs state
# props
- props get passed to the component
- function parameter
- props are immutable
- props

# state
- state is managed with the component
- variables declared in the function body
- state can be modified
- useState Hook
*/

/* ===== 04. EVENT ===== */
export const EventHandler = () => {
    const myfun = (event, para1 = 'default value') => {
        console.log('it works', event, para1)
    }
    return (<div>
        <button onClick={myfun}>Click Me</button>
        {/* event with arguments  */}
        <button onClick={(event) => myfun(event, 'para 1')}>Click Me</button>
    </div>)
}

