/*** State Management ***/
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button"
/*** Import Data Here***/
import quotes from "../assets/dummyData";




const Home =()=> {
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
        <Header>
          <p className="entryone">{entry}</p>
          <Button variant="contained" onClick={generateQuote}>
            Generate Quote
          </Button>
        </Header>
        )
    };

export default Home;

const Header = styled.div`
    margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  // border: black solid 2px;
  width: 90%;
  height: 40vh;

  p {
    
  }
}
  `

  const ButtonOne = styled.a`
    display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  `