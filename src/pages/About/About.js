import React from 'react'
import './About.css'

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
                <p>Create a simple React.JS application
                    that allows users to take notes.
                </p>
                <h3>Method</h3>
                <p>Using </p>

                <p>

                </p>

                <h2>Node Packages</h2>
                <ul>
                    <li>React-Toast - </li>
                    <li>Quill</li>
                    <li>React-Router-Dom</li>
                </ul>
                
                





            </div>
        )
    }
}


export default About;