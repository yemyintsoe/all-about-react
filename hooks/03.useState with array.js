import React, { useState } from "react"

const UseStateWithArr = () => {
  // useState with array
  let [items, setItems] = useState([
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'banana'},
    {id: 4, name: 'pineapple'},
  ])

  // create
  const nameInput = React.createRef('')
  const addItem = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 100000) + 1
    const name = nameInput.current.value
    if(name !== '') {
      // this is the main reason of useState with Array
      setItems([...items, {id, name}])
      nameInput.current.value = ''
    }else {
      alert('the name field is required')
    }
  }

  // delete
  const deleteItem = (id) => {
    setItems(items = items.filter((item) => {
      return item.id !== id
    }))
  }

  return (
    <div>
        <ul>
          {
              items.map(item => (
                <li key={item.id}>
                  <b>Item:</b> {item.id} - {item.name} <button onClick={ () => deleteItem(item.id) }>X</button>
                </li>
              ))
          }
        </ul>
        <form>
          <input type="text" ref={nameInput} />
          <button onClick={addItem}>add item</button>
        </form>
    </div>
  )
}

export default UseStateWithArr
