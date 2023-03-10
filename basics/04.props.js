// we can pass data by using <html attribute> and to accept the data we have to use <this.props>

import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li> {this.props.name} {this.props.price} </li>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <Item name="apple" price="2000" />
            <Item name="apple" price="2000" />
            <Item name="apple" price="2000" />
        </ul>
      </div>
    )
  }
}

export default App
