import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

const Form = () => {
  return (
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
            <Button variant="contained" endIcon={<SendIcon />}>
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