import React from 'react'
import './NotFound.css'

class NotFound extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }        
    }

    render(){
        return(
            <div className="not-found-bod">
                <h1>404 Page not found</h1>
            </div>
        )
    }
}


export default NotFound;