import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/form">Your quote</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  )
}

export default Navbar
