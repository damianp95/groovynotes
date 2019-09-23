import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import './Delete.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import {Button} from 'react-bootstrap'
import { IoMdTrash , IoIosArrowRoundBack } from 'react-icons/io';
import {getSessionItem, getLocalItem, setLocalItem, removeSessionItem
} from '../../../services/Storage/Storage';

class Delete extends React.Component{
    constructor(){
        super()
        //get note being changed
        let appendingMessage = getSessionItem("DeleteMessage");
 
        //get collection of notes
        let notesIn= getLocalItem("noteCollection");

        this.state={
            id: appendingMessage.id,
            title: appendingMessage.title,
            text: appendingMessage.text,
            index: appendingMessage.index,
            notes:notesIn,
            deleteNote:appendingMessage,
            redirectToReferrer:false
         }   

         this.dontDelete=this.dontDelete.bind(this);
         this.letsDelete=this.letsDelete.bind(this);
    }

    dontDelete(){
        //Destroy session storage and make no changes to the 
        // main array
        removeSessionItem('DeleteMessage');

        //Redirect back to home
        let redirectToReferrer= this.state.redirectToReferrer
        this.setState({redirectToReferrer:true})
        
    }


    letsDelete(){
        let notes = this.state.notes
        let index= this.state.index

        var notesTwo=notes.splice(index,1)
        setLocalItem("noteCollection", notes);
        //distroy object in session
        removeSessionItem('DeleteMessage');

        //Toast Message for delete
        toast.error("Deleted!", {
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
                <div class="delete-bod" >
                    <h3>Delete</h3>
                    <p>Are you sure you want to delete??</p>
                    <Button 
                    onClick={this.dontDelete}>
                        <IoIosArrowRoundBack/>
                    </Button>  
                    <Button 
                    className="btn-danger" 
                    onClick={this.letsDelete}>
                        <IoMdTrash/>
                    </Button>
                    <div className="delete-box">
                        <h4>{this.state.title}</h4>
                        <ReactQuill readOnly="true"
                        value={this.state.text}
                        theme="bubble"
                            />
                        <br/>       
                    </div>
                </div>
        )
    }
}
export default withRouter(Delete);

