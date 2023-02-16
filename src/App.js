import './App.css';
import { useState } from 'react';
import quotes from './assets/dummyData';




function App() {
  const [entry,setEntry] = useState('The quote of the day is: Click the button to find out, happy learning')

  const generateQuote = () =>{
  
    const newQuote = Math.floor(Math.random()*quotes.length)
    console.log(newQuote)
    setEntry(`"${quotes[newQuote].quote}" -${quotes[newQuote].author} `)
  }
  return (
    <div className="App">{}
      <h1>{entry}
       
      </h1>
      <button onClick={generateQuote}>Generate Quote</button>

      <form >
        <label for="name">Enter your Favorite Quote Here:</label>
        <input 
          type="text"
          placeholder="Your Favorite Quote Here"
          value=""    
          name="quote"
          />
        <label for="author">Enter the Author</label>
        <input 
          type="text"
          placeholder='Author Here'
          value=""
          name="author"
          />
        <button>Enter</button>  
      </form>
      
    </div>
  );
}

export default App;
