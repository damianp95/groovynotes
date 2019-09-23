import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import './Edit.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import {Button} from 'react-bootstrap';
import { IoMdSave } from "react-icons/io";
import {getSessionItem, getLocalItem, setLocalItem, removeSessionItem
} from '../../../services/Storage/Storage';

class Edit extends React.Component{
    constructor(){
        super()
        //get note being changed
        let appendingMessage = getSessionItem("ChangingMessage")

        //get collection of notes
        let notesIn = getLocalItem("noteCollection")

        this.state={
            id: appendingMessage.id,
            title: appendingMessage.title,
            text: appendingMessage.text,
            index: appendingMessage.index,
            notes:notesIn,
            editNote:appendingMessage,
            redirectToReferrer:false
         }   
   
         this.handleChange=this.handleChange.bind(this);
         this.handleChangeTitle=this.handleChangeTitle.bind(this);
    }

  handleChange(value) {
    this.setState({ text: value })
  }
  handleChangeTitle(event){
    const {name,value} = event.target
    this.setState({
        [name]:value
    })
 }
    onMove(){

        let notes = this.state.notes

        const {title, text} = this.state;
        let editNote =
        {
            id:this.state.id,
            title:title,
            text:text
        }
        notes[this.state.index] = editNote;

       // Update local-storage.
       setLocalItem("noteCollection", notes)
     //distroy object in session
        removeSessionItem('ChangingMessage');
        
        //Toast Message for edit
        toast.success("Successfully Updated!!", {
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

            <div>
                <h3>Edit</h3>
                <Button 
                onClick={this.onMove.bind(this)}
                className="btn-success"
                >
                    <IoMdSave
                    fontSize="20px"
                    />
                </Button> 
                <div className="edit-bod">
                    <input type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        />

                        <p>Note:</p>

                        <ReactQuill value={this.state.text}
                        onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}
export default withRouter(Edit);

