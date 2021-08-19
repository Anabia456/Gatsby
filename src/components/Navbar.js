import { Link } from "gatsby"
import React from 'react'
// import GiIcons from "react-icons/gi"
import style from "../styles/bootstrap.css"
import styles from "../styles/navbar.css"

function Navbar() {
    return (
        <div>
        {/* <h1 className="text-center"><Link to="/" style={{color:'black',textDecoration:'none'}}>Cake</Link></h1> */}
      <Link to="/">
        <img className="logo-img" alt="logo" src="/logo.webp"/>
      </Link>
<nav className="navbar navbar-expand-lg nav-bgc mt-3">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/recipies">RECIPIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
