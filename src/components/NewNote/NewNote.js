import React from 'react';
import './NewNote.css';
import uuid from 'uuid';
import {Redirect} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';

class NewNote extends React.Component{
    constructor(props){
        super(props)
        this.state={
          notes:[],
            title:"",
            text:"",
            redirectToReferrer:false
        }        
        this.handleChange=this.handleChange.bind(this);
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.onAdd=this.onAdd.bind(this);
    }

 handleChangeTitle(event){
    const {name,value} = event.target
    this.setState({
        [name]:value
    })
 }
 handleChange(value) {
    this.setState({ text: value })
  }


 onAdd(){

    //get notes from localstorage
    let notes = this.state;
    notes= localStorage.getItem("myObj");
    notes = JSON.parse(notes);

    //set values for new note
     const {title, text,} = this.state;
        let newNote =
        {
            id:uuid.v4(),
            title: title,
            text: text,
        }

       notes.push(newNote);
        this.setState({
            notes: notes
        });
    
        //Set Title, text
        this.setState({
            title: '',
             text: ''
        });

        // Update local-storage.
        var foo =JSON.stringify(notes);
        localStorage.setItem("myObj", foo);


        //Toast Message for delete
        toast.info("New Note Added!", {
         position: toast.POSITION.BOTTOM_RIGHT});

        //Redirect back to home
        let redirectToReferrer= this.state.redirectToReferrer
        this.setState({redirectToReferrer:true})

        }


    render(){

        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="./" />
        }


        return(
            <div className="newnote-bod">
                <form>
                <p>Title</p>
                <input type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChangeTitle}
                />
                <p>Note:</p>
            
                <ReactQuill value={this.state.text}
                    onChange={this.handleChange}/>
                <br/>
                </form>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}


export default NewNote;