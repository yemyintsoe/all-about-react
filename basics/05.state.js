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
      </div>
    )
  }
}

export default App

// description
// - <state> is the data of the component, and we can access it using <this.state> inside the <render()> method
// - key={i.id} is required for every loop
// - component will be changed when the state changed


