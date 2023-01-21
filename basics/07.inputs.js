// # define a name for an input
nameRef = React.createRef()

// # use already defined name
<input ref={this.nameRef} />

// # get the input value
let name = this.nameRef.current.value


// # ======================================

// # example

import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li> {this.props.name} {this.props.price} </li>
    )
  }
}

class App extends React.Component {
  state = {
    items: [
      {id: 1, name: 'apple', price: '1000'},
      {id: 2, name: 'pineapple', price: '2000'},
      {id: 3, name: 'watermelion', price: '3000'},
    ]
  }
  nameRef = React.createRef()
  priceRef = React.createRef()
  add = () => {
    let id = this.state.items.length + 1
    let name = this.nameRef.current.value
    let price = this.priceRef.current.value
    this.setState({
      items: [...this.state.items, {id, name, price}]
    })
    this.nameRef.current.value = ''
    this.priceRef.current.value = ''
  }
  render() {
    return (
      <div>
        <ul>
            {
              this.state.items.map(i => {
                return (
                  <Item key={i.id} name={i.name} price={i.price} />
                )
              })
            }
        </ul>
        <div>
          <input type="text" ref={this.nameRef} /> <br/>
          <input type="number" ref={this.priceRef} /> <br/>
          <button onClick={this.add}>Add</button>
        </div>
      </div>
    )
  }
}

export default App
