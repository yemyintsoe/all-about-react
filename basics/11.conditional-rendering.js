const Greeting = () => {
 let isLoggedIn = false
  
  if(isLoggedIn) {
    return (<div>Hello John Doe</div>)
  } else {
    return (<div>Hello Guest</div>) 
  }
}


// or

const Greeting = () => {
 let isLoggedIn = false
 let name  
  if(isLoggedIn) {
    name = "John Doe"
  } else {
    name = "Guest"
  }
  return (<div>Hello {name}</div>)
}




// # description
// - we cannot write any condition, inside the JSX
