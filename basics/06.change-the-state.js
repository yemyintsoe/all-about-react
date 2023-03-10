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
  // here is the main content
  add = () => {
    let id = this.state.items.length + 1
    this.setState({
      items: [...this.state.items, {id, name: `Item ${id}`, price: 0.01 * id}]
    })
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
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default App

// # description
// - when we click on the button the state will be modified and the component too...
// - we cannot do something like this...<button onClick={this.add()}>, bcuz <()> is not required is JSX
