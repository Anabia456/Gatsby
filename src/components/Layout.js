import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import style from "../styles/bootstrap.css"
import styles from "../styles/navbar.css"

function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
