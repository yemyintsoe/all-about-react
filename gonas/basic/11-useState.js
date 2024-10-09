const [count, setCount] = useState(0);

/*
# DESCRIPTION
- count is a state or (const variable)
- setCount is a function to modify count state
*/

/*
# HOW TO USE
- To output
*/
<h1>{ count }</h1>

/* 
- To modify
*/
const incrementCount = () => {
    setCount(count + 1);
  };
<button onClick={incrementCount}>Increase</button>



/*
# === UPDATING STATE BASED ON CURRENT STATE ===
# This won't increase two time
const incrementCount = () => {
  setCount(count + 1);
   setCount(count + 1);
};
*/

/*
# But, this will
*/
const incrementCount = () => {
  setCount((c) => c + 1);
  setCount((c) => c + 1);
};

/*
Sidenote: So that, to modify the state, we have to use the second approach (callback function)
*/
