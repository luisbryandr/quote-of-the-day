import React, { useState } from "react"
import styled from "styled-components"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"

const Form = () => {
  const [values, setValues] = useState({ quote: "", auth: "" })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(event)

    const newFormData = {
      quote: values.phrase.trim(),
      auth: values.author.trim(),
    }
    console.log(newFormData)
  }

  return (
    <StyledForm>
      <form onSubmit={sendData}>
        <label>
          <p className="para">Enter your Favorite Quote Here:</p>
        </label>

        <textarea
          name="phrase"
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Type in or paste in a quote by the Author's name you provided in the description above"
        ></textarea>
        <br></br>
        <label>
          <p className="author" name="author">
            Enter the Author
          </p>
        </label>

        <input
          type="text"
          placeholder="Author Here"
          name="author"
          onChange={handleChange}
          placeholder="Author's Name"
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.div`
  // display: flex;
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
