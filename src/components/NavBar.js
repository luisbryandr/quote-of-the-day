import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function NavBar() {
  return (
    <div>
      <Nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/form">Your quote</Link>
      </Nav>
    </div>
  )
}

export default NavBar

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  // border: 1px blue solid;
  background-color: #1976d2;
  border-radius: 4px;
  padding: 7px;
  hover {
    background-color: yellow;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  // border: red 1px solid;
`
