// App.js

import React from "react";

class Item extends React.Component {
  render() {
    return <li>hello world</li>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
            <Item />    // here we use the Item component
            <Item />
            <Item />
        </ul>
      </div>
    )
  }
}

export default App
