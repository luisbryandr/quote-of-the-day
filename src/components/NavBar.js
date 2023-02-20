import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (

      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/form">Your quote</Link>
            </li>
          </ul>
        </nav>
      </div>
    
  )
}

export default NavBar
