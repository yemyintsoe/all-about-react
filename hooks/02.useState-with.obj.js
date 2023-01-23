import { useState } from "react"

const UseStateHookWithObj = () => {
    const [name, setName] = useState({firstName: 'first name', lastName: 'last name'})
  return (
    <div>
        <div>first name: {name.firstName} | last name: {name.lastName}</div>
        // # this won't work
        // <input type="text" value={name.firstName} onChange={e =>  setName({firstName: e.target.value}) } />
        // <input type="text" value={name.lastName} onChange={e => setName({lastName: e.target.value})} />
        // # this will
        <input type="text" value={name.firstName} onChange={e =>  setName({...name, firstName: e.target.value}) } />
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
    </div>
  )
}

export default UseStateHookWithObj
