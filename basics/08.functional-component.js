const Header = <div><h1>Hello World</h1></div>

// # functional component
// or
import React from 'react'
function Header(props) {
    return (
       <div><h1>{props.name}</div>
    )
}

// or
const Header = props => {
   return (
      <div><h1>{props.name}</div>
   )
}

// or
const Header = props => ( <div>{{ props.name }}</div> )

// or
const Header = ({name}) =>  ( <div>{{ name }}</div> )       // here, we use destructure for the props

export default Header;
