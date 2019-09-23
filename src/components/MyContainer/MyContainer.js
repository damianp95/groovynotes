import React from 'react'
import './MyContainer.css'
import Roww from './Roww/Roww'
import uuid from 'uuid';
import {Container,Row,Col} from 'react-bootstrap';

class MyContainer extends React.Component{
    constructor(props){
        super(props)
          
  
        this.state={
           notes:[],
           primArr:[],
           id:"",
           title:"",
           text:""
        }        
    }
    componentDidMount(){
    
        let newNote ={
          id:uuid.v4,
          title: "Something Interesting",
          text: "What will we take notes on today??"
        }

        let newArr = this.state.primArr.map(note => note);
        newArr.push(newNote);
        this.setState({
            notes: newArr
        });

 
        if(!localStorage.getItem("noteCollection")){
          let foo= JSON.stringify(newArr);
           localStorage.setItem("noteCollection", foo);
           
       }
       
     
  
        let notesStored = localStorage.getItem("noteCollection");
        notesStored = JSON.parse(notesStored);

        let notes = this.setState({


            notes:notesStored

        
        })
    }

    render(){



      const collectionOfNotes= this.state.notes.map((note, index) => 
               <Col lg={6}
               md={6}>
                <Roww className="m-auto m-l-1"
                    key={note.id}
                    id={note.id}
                    index={index}
                    title={note.title}
                    text={note.text}
                />
                </Col>
                )   


        return(
            <div className="container-bod">
        <Container>
            <Row>
                {collectionOfNotes}
            </Row>
        </Container>
        </div>
        )
    }
}

export default MyContainer