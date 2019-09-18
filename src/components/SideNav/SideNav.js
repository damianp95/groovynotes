import React from "react";
import {Link} from 'react-router-dom';
import '../SideNav/SideNav.css'
import { IoMdHome, IoMdAdd, IoMdInformationCircle} from "react-icons/io";


function SideNav(){
    return(
       <div className="main-side-nav">
            <div className="button-container">
                <Link className="nav-link text-white" to="/">
                    <IoMdHome
                    fontSize="25px"
                                />
                </Link>
                <Link className="nav-link text-white" to="/create">
                    <IoMdAdd
                    fontSize="25px"
                                />
                </Link>
                <Link className="nav-link text-white" to="/about">
                    <IoMdInformationCircle
                    fontSize="25px"
                />
                </Link>
            </div>
       </div>
    )
}

export default SideNav;
