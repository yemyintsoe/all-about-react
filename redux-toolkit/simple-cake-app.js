//nodejs project style  
// # cakeSlice.js
const createSlice = require('@reduxjs/toolkit').createSlice

const cakeSlice = createSlice({
    name: 'cake',
    initialState: { numOfCakes: 10 },
    reducers: {
        ordered: (state) => {
             state.numOfCakes ---
        },
        restocked: (state, action){
            state.numOfCakes += action.payload
        }
    }
})
  
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlide.actions

// # store.js
const configureStore = require('@reduxjs/toolkit')
const cakeReducer = require('./cakeSlice')

const store = configureStore({
    reducer: {
      cake: cakeReducer
      // ...
    }
})

// # index.js
const store = require('./store')
const cakeActions = require('./cakeSlice').cakeActions

console.log('initialState', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updatedState', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

unsubscribe()
