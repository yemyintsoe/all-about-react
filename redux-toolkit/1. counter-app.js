# react installation

> npm install create-react-app
> npx create-react-app redux-toolkit-app
> npm start


# redux toolkit installation
> npm install @reduxjs/toolkit react-redux


#1 ========== Create a Redux Store ==========
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})


#2 ========== Provide the Redux Store to React ==========
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'

const root = document.getElementById('root')
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

#3 ========== Create a Redux State Slice ==========
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log('increase hey...')
            state.count ++
        },
        decrement: (state, action) => {
            console.log('decrese hey ...')
            state.count -- 
        },
        reset: (state, action) => {
            console.log('reseting ...')
            state.count = 0
        }
    }
})
export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer

#4 ========== Add Slice Reducers to the Store ==========
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

#5 ========== Use Redux State and Actions in React Components ==========
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/CounterSlice';

const App = () => {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;




### What You've Learned
That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:

## SUMMARY
#1 Create a Redux store with configureStore
- configureStore accepts a reducer function as a named argument
- configureStore automatically sets up the store with good default settings
#2 Provide the Redux store to the React application components
- Put a React-Redux <Provider> component around your <App />
- Pass the Redux store as <Provider store={store}>
#3 Create a Redux "slice" reducer with createSlice
- Call createSlice with a string name, an initial state, and named reducer functions
- Reducer functions may "mutate" the state using Immer
- Export the generated slice reducer and action creators
#4 Use the React-Redux useSelector/useDispatch hooks in React components
- Read data from the store with the useSelector hook
- Get the dispatch function with the useDispatch hook, and dispatch actions as needed
