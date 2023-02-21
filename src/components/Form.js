import React, { useState } from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

const Form = () => {

    const [values, setValues]  = useState({id: "", quote: "", auth:"" })



    const sendData =(event)=>{
      event.preventDefault()
 console.log(event)
   
  // const newFormData = { 
  //   paragraph: event.target.paragraph.value,
  //   author: event.target.author.value
  // }

  // setValues([...values, newFormData])
}


  return (
    <StyledForm>
          <form onSubmit={sendData}>
            <label>
              <p className="para">Enter your Favorite Quote Here:</p>
            </label>

            <textarea name="paragraph" cols="30" rows="10"></textarea>
            <br></br>
            <label>
              <p className="author" name="author">Enter the Author</p>
            </label>

            <input type="text" placeholder="Author Here" name="author" />
            <br></br>
            <br></br>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Enter
            </Button>
          </form>
      </StyledForm>
  )
  
}

export default Form

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