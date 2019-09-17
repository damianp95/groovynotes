import React from 'react';
import './Create.css';
import NewNote from '../../components/NewNote/NewNote';


class Create extends React.Component{

    constructor(props){
        super(props)
        this.state={
            
        }  
        
    }

    render(){



        return(

            <div className="create-bod">
                <h1>Create New Note!</h1>
                <div>
                    <NewNote
                     className="note-form"/>
                   
                </div>
            </div>
        )
    }
}


export default Create;