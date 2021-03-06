import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

// const authenticatedOptions = (
//   <React.Fragment>
//     <Link to="/change-password">Change Password</Link>
//     <Link to="/sign-out">Sign Out</Link>
//   </React.Fragment>
// )
//
// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Link to="/sign-up">Sign Up</Link>
//     <Link to="/sign-in">Sign In</Link>
//   </React.Fragment>
// )

const alwaysOptions = (
  <React.Fragment>
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/weather">Weather</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1 className="title">Weather Now</h1>
    <nav>
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
