import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;  
`


function NavBar() {
  return (

      <div>
        <nav>
              <StyledLink exact to="/">
                Home
              </StyledLink>
              <StyledLink to="/form" >Your quote</StyledLink>
        </nav>
      </div>
    
  )
}

export default NavBar
