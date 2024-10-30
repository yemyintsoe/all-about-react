/* 
# How NOT to fetchf data in React
*/
const App = () => {
  ...
  fetch('https://test.com/api/posts')
  ...
}

/*
If we fetch data directly inside the component, there will be infinite request in the network tab.
*/
