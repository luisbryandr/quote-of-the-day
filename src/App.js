import "./App.css"
import { useState, useEffect } from "react"

import quotes from "./assets/dummyData"
import styled from "styled-components"

function App() {
  const [entry, setEntry] = useState(
    "The quote of the day is: Click the button to find out, happy learning"
  )

  console.log(entry)

  const generateQuote = () => {
    const newQuote = Math.floor(Math.random() * quotes.length)
    console.log(newQuote)

    setEntry(`"${quotes[newQuote].quote}" -${quotes[newQuote].author} `)
  }
  return (
    <MainDiv className="App">
      <Header>
        <p className="entryone">{entry}</p>
        <button onClick={generateQuote}>Generate Quote</button>
      </Header>
      <StyledForm>
        <form>
          <label>
            <p className="para">Enter your Favorite Quote Here:</p>
          </label>

          <textarea name="paragraph" cols="30" rows="10"></textarea>
          <br></br>
          <label>
            <p className="author">Enter the Author</p>
          </label>

          <input type="text" placeholder="Author Here" name="author" />
          <br></br>
          <button>Enter</button>
        </form>
      </StyledForm>
    </MainDiv>
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

const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  // border: black solid 2px;
  width: 90%;
  height: 40vh;
}
  `

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  }
  margin-top: 40px;

  //border: black solid 2px;
  width: 90%;
  height: 60vh;

  .para, .author {
    color: white;
    font-size: 30px
  }
`
