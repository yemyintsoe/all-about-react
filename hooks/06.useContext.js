// App.js

import React from 'react';
import ComponentOne from './components/ComponentOne';

export const TitleContext = React.createContext()

const App = () => {
  const titleName = "React Hook App"
  return (
  <div className='App'>
      <h1>React Hook</h1>
      <TitleContext.Provider value={titleName}>
        <ComponentOne />
      </TitleContext.Provider>
  </div>
  );
}

export default App;


// ComponentOne.js
import { useContext } from 'react'
import { TitleContext } from '../App'

const ComponentOne = () => {
  const appTitle = useContext(TitleContext)
  return (
    <h1>{ appTitle }</h1>
  )
}
