/***  Import React Tools Here ***/

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

/*** Import Components Here ***/
import Home from "./components/Home"
import Form from "./components/Form"
import NavBar from "./components/NavBar"

/*** Import Styles heres ***/
import styled from "styled-components"
import "./App.css"

function App() {
  return (
    <div>
      <MainDiv className="App">
       <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Form}/>
        </Switch>
        </Router>
      </MainDiv>
    </div>
  )
}

export default App

const MainDiv = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  // background-color: grey;
  color: black;

  width: 80%;
  height: 80vh;
  margin: 0 auto;
`

