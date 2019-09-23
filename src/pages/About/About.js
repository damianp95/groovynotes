import React from 'react'
import './About.css'
import { IoLogoGithub } from "react-icons/io";

class About extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }        
    }

    render(){
        return(
            <div className="about-bod">
                <h1>About Project</h1>
                <h2>Groovy Notes </h2>
                <h3>Objective</h3>
                <p>Create a notepad app will allows 
                    users to create and view a list of
                    notes. The user can add, edit and 
                    delete notes using the React application.
                </p>
                <h2>Node Packages</h2>
                <ul>
                    <li>ReactToast </li>
                    <li>Quill</li>
                    <li>React-Router-Dom</li>
                    <li>uuid</li>
                    <li>React-Icons</li>
                </ul>
                <p>
                    <IoLogoGithub fontSize="40px"/>
                    <br/>
                    <a href="https://github.com/dpasc/groovynotes">Source Code</a>
                </p>
                
                





            </div>
        )
    }
}


export default About;