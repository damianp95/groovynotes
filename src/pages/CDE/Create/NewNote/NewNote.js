import React from 'react';
import './NewNote.css';
import uuid from 'uuid';
import {Redirect} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import {getLocalItem, setLocalItem
} from '../../../../services/Storage/Storage'

 
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
   let notes = getLocalItem("noteCollection")

    //set values for new note
     const {title, text} = this.state;
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
    
        // Update local-storage.
         setLocalItem("noteCollection", notes)
         
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
                        maxLength="22"
                        />
                    <p>Note:</p>
                    <ReactQuill 
                    value={this.state.text}
                    onChange={this.handleChange}/>
                    <br/>
                </form>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}


export default NewNote;