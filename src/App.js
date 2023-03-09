/***  Import React Tools Here ***/

import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom"

/*** Import Components Here ***/
import Home from "./components/Home"
import Form from "./components/Form"
import NavBar from "./components/NavBar"

/*** Import Styles heres ***/
import styled from "styled-components"
import "./App.css"

function App() {
  return (
    <MainDiv>
    <Router>
        <NavBar/>
        <Switch>   
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </MainDiv>
  )
}

export default App

const MainDiv = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  // background-color: grey;
  color: white;

  width: 80%;
  height: 80vh;
  margin: 0 auto;
`
