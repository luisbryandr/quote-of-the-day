import "./App.css"
import { useState } from "react"
import quotes from "./assets/dummyData"
import styled from "styled-components"

function App() {
  const [entry, setEntry] = useState(
    "The quote of the day is: Click the button to find out, happy learning"
  )

  const generateQuote = () => {
    const newQuote = Math.floor(Math.random() * quotes.length)
    console.log(newQuote)
    setEntry(`"${quotes[newQuote].quote}" -${quotes[newQuote].author} `)
  }
  return (
    <MainDiv className="App">
      <Header>
        <h1>{entry}</h1>
        <button onClick={generateQuote}>Generate Quote</button>
      </Header>
      <StyledForm>
        <form>
          <label>Enter your Favorite Quote Here:</label>
          <br></br>
          <input
            type="text"
            placeholder="Your Favorite Quote Here"
            name="quote"
          />
          <br></br>
          <label>Enter the Author</label>
          <br></br>
          <input type="text" placeholder="Author Here" name="author" />
          <br></br>
          <button>Enter</button>
        </form>
      </StyledForm>
    </MainDiv>
  )
}

export default App

const StyledForm = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;
  border: black solid 2px;
  width: 60%;
  height: 40vh;
`
const MainDiv = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: grey;
  color: white;
  margin: auto;
  width: 80%;
  height: 80vh;
`
const Header = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  border: black solid 2px;
  width: 90%;
  height: 40vh;
`
