// here is the very basic components

// App.js

import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    )
  }
}

export default App

// 2 steps to create a component
1. there must be a <class> that extends <React.Component>
2. there must be a <render()> method inside the class with a <return> keyword that return an element
