# action
// - the only way your app can interact with the store
// - carry some information from your app to the redux store
// - the action is the plain JavaScript Objects

# reducer
// - specify how the app's state changes in response to actions sent to the store
// - is a function that accepts state and action as arguments, and returns the next state of the application like below
// (previousState, action) => newState


# store
// - one store for the entire application
// - responsibilities
// 1. holds application
// 2. allows access to state via getState()
// 3. allows state to be updated via dispatch(action)
// 4. registers listners via subscribe(listner)
// 5. handle unregistering of listners via the function returned by subscribe(listner)




const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"

// action 
const orderCake = () => {
    return {
        type: CAKE_ORDERED
    }
}   

// reducer
const initialState = {
    numberOfCake: 10
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        default:
            return state
    }
}

// store
const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

// this actually call the store.subscribe
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
