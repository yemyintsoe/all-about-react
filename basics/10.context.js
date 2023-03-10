// # without Context

// -the following are the steps that we can pass the data with using <Context>
// -without <Context>, we can't skip the step

const App = props => {
  return <Header title="React Title"/>
}

const Header = props => {
 return  <Title title={props.title} />
}

const Title = props => {
  return (<h1>{props.title}</h1>)
}

// # with Context - way 1
import {React} from 'react'
const MyContext = React.createContext()

const App = props => {
  return (
    <MyContext.Provider title="React Title">
      <Header />
    <MyContext.Provider/>
  )
}

const Header = props => {
  return <Title />
}

const Title = props => {
  return (
    <MyContext.Consumer>
      { title => <h1>{title}</h1> }
    </MyContext.Consumer>
  )
}

// # with Context - way 2
import {React} from 'react'
const MyContext = React.createContext('Hello React')

const App = props => {
  return (<Header />)
}

const Header = props => {
  return (<Title />)
}

const Title = props => {
const title = React.useContext(MyContext)
  return (<h1>{title}</h1>)
}

// # description
// - we <Context> to pass and get the data from anywhere...that mean the passed data can skip the component level
