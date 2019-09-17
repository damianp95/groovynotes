import React from "react";
import {Link} from 'react-router-dom';
import './MyNav.css';
import {Nav} from 'react-bootstrap'


function MyNav(){
    return(
        <div class="main-nav" >
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/home">
                 <Link className="nav-link" to="/">Home</Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">
                    <Link className="nav-link" to="/create">Create</Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">
                <Link className="nav-link" to="/about">About</Link>
                </Nav.Link>
                </Nav.Item>
            </Nav>

      
           
           
        </div>
    )
}

export default MyNav;
