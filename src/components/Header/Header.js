import React from "react"
import './Header.css'
import MyNav from './MyNav/MyNav'

function Header(){
    return(
        <div className="main-header">
            <h3>Groovy Notes!</h3>
            <MyNav/>
        </div>
    )
}

export default Header;