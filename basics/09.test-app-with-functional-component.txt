import React, { createRef } from "react";

const App = props => {
  let [items, setItems] = React.useState([
    {id: 1, name: 'apple', price: '1000'},
    {id: 2, name: 'pineapple', price: '2000'},
    {id: 3, name: 'watermelion', price: '3000'},
  ])

  let add = (name, price) => {
    let id = items.length + 1
    setItems([...items, {id, name, price}])
  }
  return (
    <div style={
      {
        backgroundColor: 'green',
        width: 300,
        margin: '5px auto',
        padding: 5,
        textAlign: "center",
        borderRadius: 4
      }
      }>
      <h4>React App</h4>
      <ul style={{listStyle: "none"}}>
          {
            items.map(i => {
              return (
                <Item
                key={i.id} 
                name={i.name} 
                price={i.price} 
                />
              )
            })
          }
      </ul>
      <AddForm add={add} />
    </div>
  )
}

const Item = ({name, price}) => (
  <li> {name} {price} </li>
)

const AddForm = props => {
  let nameRef = createRef()
  let priceRef = createRef()
  let add = () => {
    let name = nameRef.current.value
    let price = priceRef.current.value
    props.add(name, price)
    nameRef.current.value = ''
    priceRef.current.value = ''
  }
  return (
    <div>
      <input type="text" ref={nameRef} /> <br/>
      <input type="number" ref={priceRef} /> <br/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App
