import React from "react";
import {Link} from 'react-router-dom';
import './MyNav.css';
import {Nav} from 'react-bootstrap'
import { IoMdHome, IoMdAdd, IoMdInformationCircle} from "react-icons/io";


function MyNav(){
    return(
        <div class="main-nav">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">
                        <Link className="nav-link text-white" to="/">
                                <IoMdHome
                                fontSize="25px"
                                />
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        <Link className="nav-link text-white" to="/create">
                                <IoMdAdd
                                fontSize="25px"
                                />
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">
                        <Link className="nav-link text-white" to="/about">
                            <IoMdInformationCircle
                            fontSize="25px"
                            />
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
 
        </div>
    )
}

export default MyNav;
