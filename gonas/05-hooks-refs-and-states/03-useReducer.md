# State with useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState)

const reducer = (state, action) => {
  switch(action.type) {
    case 'dec':
      return state - 1;
    case 'inc':
      return state + 1;
    case 'setCount';
      return action.payload;
    default:
    throw new Error('Unknown');
  }
}
```

1. An alternative way of setting state, ideal for complex state and related pieces of state
2. Stores related pieces of state in a **state** object
3. **useReducer** needs **reducer**: function containing all logic to update state. Decouples state logic from component
4. **reducer**: pure function (no side effects!) that takes current state and action, and **return the next state**.
5. **action**: object that describes **how to update state**
6. **dispatch** function to trigger state updates, by sending actions from event handlers to the reducer 
